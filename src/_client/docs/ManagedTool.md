
# ManagedTool

One tool the gateway can run itself.

## Properties

Name | Type
------------ | -------------
`acceptedTypes` | Array&lt;string&gt;
`available` | boolean
`description` | string
`example` | { [key: string]: any; }
`id` | string
`inputSchema` | { [key: string]: any; }
`object` | string

## Example

```typescript
import type { ManagedTool } from ''

// TODO: Update the object below with actual values
const example = {
  "acceptedTypes": null,
  "available": null,
  "description": null,
  "example": null,
  "id": null,
  "inputSchema": null,
  "object": null,
} satisfies ManagedTool

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ManagedTool
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


