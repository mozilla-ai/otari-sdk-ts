/**
 * The SDK never follows a redirect: the request carries credentials, and a
 * redirect may name another host.
 *
 * The first suite mocks `fetch` like the other unit tests. The second runs the
 * real `fetch` against two loopback servers, because only that proves the
 * runtime honors the option the SDK passes.
 */

import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import { afterEach, describe, expect, it } from "vitest";
import { OtariClient } from "../../src/client.js";
import { ControlPlane } from "../../src/controlPlane.js";
import { RedirectError } from "../../src/errors.js";

const LOCATION = "http://other.example/api/v1/models";

function redirectingFetch(): { fetch: typeof fetch; inits: RequestInit[] } {
  const inits: RequestInit[] = [];
  const fetchMock = (async (_url: string, init?: RequestInit) => {
    inits.push(init ?? {});
    return new Response(null, { status: 307, headers: { location: LOCATION } });
  }) as unknown as typeof fetch;
  return { fetch: fetchMock, inits };
}

const CALLS: Array<[string, (client: OtariClient) => Promise<unknown>]> = [
  ["generated core GET", (c) => c.listModels()],
  ["generated core POST", (c) => c.embedding({ model: "openai:x", input: "hi" })],
  [
    "streaming POST",
    (c) =>
      c.completion({
        model: "openai:x",
        messages: [{ role: "user", content: "hi" }],
        stream: true,
      }),
  ],
  ["raw POST", (c) => c.speech({ model: "openai:tts-1", input: "hi", voice: "alloy" })],
  ["control plane", (c) => c.controlPlane.keys.list()],
];

describe("redirects (mocked fetch)", () => {
  it.each(CALLS)("%s asks fetch not to follow and raises RedirectError", async (_name, call) => {
    const mock = redirectingFetch();
    const client = new OtariClient({
      apiBase: "http://gateway.example",
      apiKey: "vk",
      adminKey: "master",
      fetch: mock.fetch,
    });

    const error = await call(client).catch((e: unknown) => e);

    expect(error).toBeInstanceOf(RedirectError);
    expect((error as RedirectError).location).toBe(LOCATION);
    expect((error as RedirectError).statusCode).toBe(307);
    expect(mock.inits).toHaveLength(1);
    expect(mock.inits[0]?.redirect).toBe("manual");
  });

  it("a ControlPlane built directly refuses redirects too", async () => {
    const mock = redirectingFetch();
    const controlPlane = new ControlPlane("http://gateway.example", "master", mock.fetch);

    await expect(controlPlane.keys.list()).rejects.toBeInstanceOf(RedirectError);
    expect(mock.inits[0]?.redirect).toBe("manual");
  });
});

describe("redirects (real fetch, loopback servers)", () => {
  const servers: Server[] = [];

  async function listen(server: Server): Promise<string> {
    servers.push(server);
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    return `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  }

  afterEach(async () => {
    await Promise.all(servers.splice(0).map((s) => new Promise((resolve) => s.close(resolve))));
  });

  it("sends nothing to the address a redirect names", async () => {
    let hits = 0;
    const other = await listen(
      createServer((_req, res) => {
        hits += 1;
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ object: "list", data: [] }));
      }),
    );
    const gateway = await listen(
      createServer((req, res) => {
        res.writeHead(307, { location: `${other}${req.url}` });
        res.end();
      }),
    );

    const client = new OtariClient({ apiBase: gateway, apiKey: "vk" });

    await expect(client.listModels()).rejects.toBeInstanceOf(RedirectError);
    expect(hits).toBe(0);
  });
});
