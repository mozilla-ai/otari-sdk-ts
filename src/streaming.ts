/**
 * Server-Sent-Events (SSE) streaming shim for the otari gateway client.
 *
 * The OpenAPI-generated core in `./_client` buffers the full HTTP response
 * before deserializing, so it *cannot* stream. (This is a known upstream
 * OpenAPI Generator limitation.) For `stream: true` on chat, responses, and
 * messages, the SDK hand-writes the stream here: a raw streaming `fetch` whose
 * `text/event-stream` body is parsed into typed chunks.
 *
 * The line/SSE decoding mirrors the official `openai` npm SDK's
 * implementation (`openai/src/core/streaming.ts`): a byte-accumulating
 * double-newline chunker (`iterSSEChunks`), a `LineDecoder` that splits on
 * `\n` / `\r` / `\r\n`, and an `SSEDecoder` that handles `event:` / `data:` /
 * `id:` fields, `:`-comment lines, and joins multi-line `data:` payloads.
 * Termination is the `data: [DONE]` sentinel.
 *
 * Per-endpoint yielded type (matches the Python reference):
 * - chat -> typed `ChatCompletionChunk` (via the generated `*FromJSON`)
 * - responses / messages -> the parsed JSON event object (their event streams
 *   have no single typed chunk model; callers get the raw parsed event).
 */

import { type ChatCompletionChunk, ChatCompletionChunkFromJSON } from "./_client/index.js";

export type StreamKind = "chat" | "responses" | "messages";

/** A decoded Server-Sent Event, mirroring openai's `ServerSentEvent`. */
export interface ServerSentEvent {
  event: string | null;
  data: string;
  raw: string[];
}

/**
 * Async iterable of parsed SSE chunks over a streaming `fetch` Response body.
 *
 * Mirrors openai's `Stream` class: it lazily consumes `response.body` exactly
 * once, stops on `[DONE]`, throws on a `{ error }` event payload, and exposes
 * an `AbortController` so callers that `break` out of the loop abort the
 * underlying request.
 */
export class Stream<Item> implements AsyncIterable<Item> {
  constructor(
    private iterator: () => AsyncIterator<Item>,
    readonly controller: AbortController,
  ) {}

  static fromSSEResponse<Item>(
    response: Response,
    controller: AbortController,
    kind: StreamKind,
  ): Stream<Item> {
    let consumed = false;

    async function* iterator(): AsyncIterator<Item, undefined, undefined> {
      if (consumed) {
        throw new Error(
          "Cannot iterate over a consumed stream, make a new request to iterate again.",
        );
      }
      consumed = true;
      let done = false;
      try {
        for await (const sse of iterSSEMessages(response, controller)) {
          if (done) continue;

          if (sse.data.startsWith("[DONE]")) {
            done = true;
            continue;
          }

          let data: unknown;
          try {
            data = JSON.parse(sse.data);
          } catch (e) {
            console.error("Could not parse SSE message into JSON:", sse.data);
            console.error("From chunk:", sse.raw);
            throw e;
          }

          if (data && typeof data === "object" && "error" in data && data.error) {
            throw new Error(
              typeof (data as { error: unknown }).error === "string"
                ? (data as { error: string }).error
                : JSON.stringify((data as { error: unknown }).error),
            );
          }

          yield parseChunk(kind, data) as Item;
        }
        done = true;
      } catch (e) {
        if (isAbortError(e)) return;
        throw e;
      } finally {
        // If the consumer `break`s, abort the ongoing request.
        if (!done) controller.abort();
      }
    }

    return new Stream(iterator, controller);
  }

  [Symbol.asyncIterator](): AsyncIterator<Item> {
    return this.iterator();
  }
}

/**
 * Parse one decoded SSE `data` payload into the chunk type for `kind`.
 *
 * Chat yields a typed `ChatCompletionChunk` (via the generated `*FromJSON`);
 * responses/messages yield the parsed JSON object (no single typed model).
 */
function parseChunk(kind: StreamKind, data: unknown): unknown {
  if (kind === "chat") {
    return ChatCompletionChunkFromJSON(data);
  }
  return data;
}

function isAbortError(e: unknown): boolean {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}

// ---------------------------------------------------------------------------
// SSE decoding — mirrors openai/src/core/streaming.ts
// ---------------------------------------------------------------------------

async function* iterSSEMessages(
  response: Response,
  controller: AbortController,
): AsyncGenerator<ServerSentEvent, void, unknown> {
  if (!response.body) {
    controller.abort();
    throw new Error("Attempted to iterate over a response with no body");
  }

  const sseDecoder = new SSEDecoder();
  const lineDecoder = new LineDecoder();

  const iter = readableStreamToAsyncIterable<Uint8Array>(response.body);
  for await (const sseChunk of iterSSEChunks(iter)) {
    for (const line of lineDecoder.decode(sseChunk)) {
      const sse = sseDecoder.decode(line);
      if (sse) yield sse;
    }
  }

  for (const line of lineDecoder.flush()) {
    const sse = sseDecoder.decode(line);
    if (sse) yield sse;
  }
}

/**
 * Accumulate raw bytes and yield complete SSE chunks: emit on each
 * double-newline boundary. Mirrors openai's `iterSSEChunks`.
 */
async function* iterSSEChunks(
  iterator: AsyncIterableIterator<Uint8Array>,
): AsyncGenerator<Uint8Array> {
  let data = new Uint8Array();

  for await (const chunk of iterator) {
    if (chunk == null) continue;

    const binaryChunk =
      chunk instanceof ArrayBuffer
        ? new Uint8Array(chunk)
        : typeof chunk === "string"
          ? new TextEncoder().encode(chunk)
          : chunk;

    const newData = new Uint8Array(data.length + binaryChunk.length);
    newData.set(data);
    newData.set(binaryChunk, data.length);
    data = newData;

    let patternIndex = findDoubleNewlineIndex(data);
    while (patternIndex !== -1) {
      yield data.slice(0, patternIndex);
      data = data.slice(patternIndex);
      patternIndex = findDoubleNewlineIndex(data);
    }
  }

  if (data.length > 0) {
    yield data;
  }
}

/**
 * Find the index just past the first `\n\n`, `\r\r`, or `\r\n\r\n` in `buffer`,
 * or -1. Mirrors openai's `findDoubleNewlineIndex`.
 */
function findDoubleNewlineIndex(buffer: Uint8Array): number {
  const newline = 0x0a; // \n
  const carriage = 0x0d; // \r

  for (let i = 0; i < buffer.length - 1; i++) {
    if (buffer[i] === newline && buffer[i + 1] === newline) {
      return i + 2;
    }
    if (buffer[i] === carriage && buffer[i + 1] === carriage) {
      return i + 2;
    }
    if (
      buffer[i] === carriage &&
      buffer[i + 1] === newline &&
      i + 3 < buffer.length &&
      buffer[i + 2] === carriage &&
      buffer[i + 3] === newline
    ) {
      return i + 4;
    }
  }

  return -1;
}

/**
 * Splits incoming byte/string chunks into individual lines, handling line
 * endings (`\n`, `\r`, `\r\n`) that may straddle chunk boundaries. A simplified
 * port of openai's `LineDecoder`.
 */
class LineDecoder {
  private buffer: string;
  private decoder: TextDecoder;

  constructor() {
    this.buffer = "";
    this.decoder = new TextDecoder("utf-8");
  }

  decode(chunk: Uint8Array | string | null | undefined): string[] {
    if (chunk == null) return [];

    const text = typeof chunk === "string" ? chunk : this.decoder.decode(chunk, { stream: true });

    this.buffer += text;

    const lines: string[] = [];
    let lineStart = 0;
    for (let i = 0; i < this.buffer.length; i++) {
      const ch = this.buffer[i];
      if (ch === "\n") {
        lines.push(this.buffer.slice(lineStart, i));
        lineStart = i + 1;
      } else if (ch === "\r") {
        lines.push(this.buffer.slice(lineStart, i));
        // Swallow a following \n so \r\n counts as one line break.
        if (this.buffer[i + 1] === "\n") i++;
        lineStart = i + 1;
      }
    }
    this.buffer = this.buffer.slice(lineStart);
    return lines;
  }

  flush(): string[] {
    if (!this.buffer) return [];
    const remaining = [this.buffer];
    this.buffer = "";
    return remaining;
  }
}

/** A direct port of openai's `SSEDecoder`. */
class SSEDecoder {
  private data: string[];
  private event: string | null;
  private chunks: string[];

  constructor() {
    this.event = null;
    this.data = [];
    this.chunks = [];
  }

  decode(line: string): ServerSentEvent | null {
    if (line.endsWith("\r")) {
      line = line.substring(0, line.length - 1);
    }

    if (!line) {
      // Empty line: dispatch the buffered event (if any).
      if (!this.event && !this.data.length) return null;

      const sse: ServerSentEvent = {
        event: this.event,
        data: this.data.join("\n"),
        raw: this.chunks,
      };

      this.event = null;
      this.data = [];
      this.chunks = [];

      return sse;
    }

    this.chunks.push(line);

    if (line.startsWith(":")) {
      return null;
    }

    let [fieldname, , value] = partition(line, ":");

    if (value.startsWith(" ")) {
      value = value.substring(1);
    }

    if (fieldname === "event") {
      this.event = value;
    } else if (fieldname === "data") {
      this.data.push(value);
    }

    return null;
  }
}

function partition(str: string, delimiter: string): [string, string, string] {
  const index = str.indexOf(delimiter);
  if (index !== -1) {
    return [str.substring(0, index), delimiter, str.substring(index + delimiter.length)];
  }
  return [str, "", ""];
}

/**
 * Adapt a web `ReadableStream` to an async iterable. Node 18+ streams are
 * already async-iterable, but we don't rely on that to stay portable.
 */
function readableStreamToAsyncIterable<T>(
  stream: ReadableStream<T> & { [Symbol.asyncIterator]?: () => AsyncIterator<T> },
): AsyncIterableIterator<T> {
  if (stream[Symbol.asyncIterator]) {
    return stream[Symbol.asyncIterator]() as AsyncIterableIterator<T>;
  }

  const reader = stream.getReader();
  return {
    async next() {
      try {
        const result = await reader.read();
        if (result?.done) reader.releaseLock();
        return result;
      } catch (e) {
        reader.releaseLock();
        throw e;
      }
    },
    async return() {
      const cancelPromise = reader.cancel();
      reader.releaseLock();
      await cancelPromise;
      return { done: true, value: undefined };
    },
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}

// Suppress "unused" for the public type re-export used by the client.
export type { ChatCompletionChunk };
