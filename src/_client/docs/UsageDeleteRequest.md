
# UsageDeleteRequest

Selection of imported usage rows to delete.

## Properties

Name | Type
------------ | -------------
`apiKeyId` | [ApiKeyId](ApiKeyId.md)
`byFilter` | boolean
`endDate` | Date
`endpoint` | string
`ids` | Array&lt;string&gt;
`model` | [Model](Model.md)
`priced` | boolean
`provider` | string
`source` | string
`sourceLabel` | string
`startDate` | Date
`status` | string
`tool` | string
`userId` | [UserId](UserId.md)

## Example

```typescript
import type { UsageDeleteRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiKeyId": null,
  "byFilter": null,
  "endDate": null,
  "endpoint": null,
  "ids": null,
  "model": null,
  "priced": null,
  "provider": null,
  "source": null,
  "sourceLabel": null,
  "startDate": null,
  "status": null,
  "tool": null,
  "userId": null,
} satisfies UsageDeleteRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageDeleteRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


