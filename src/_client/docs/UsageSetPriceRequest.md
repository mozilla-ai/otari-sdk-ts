
# UsageSetPriceRequest

Selection of imported usage rows plus the manual per-1M rates to price them at.  ``input`` and ``output`` are required (every row is charged for them); the cache rates are optional and, when omitted, those tokens fold into the fresh-input charge exactly as an unpriced cache rate does in normal metered pricing.

## Properties

Name | Type
------------ | -------------
`apiKeyId` | [ApiKeyId](ApiKeyId.md)
`byFilter` | boolean
`cacheReadPricePerMillion` | number
`cacheWritePricePerMillion` | number
`endDate` | Date
`endpoint` | string
`ids` | Array&lt;string&gt;
`inputPricePerMillion` | number
`model` | [Model](Model.md)
`outputPricePerMillion` | number
`priced` | boolean
`provider` | string
`source` | string
`sourceLabel` | string
`startDate` | Date
`status` | string
`tool` | string
`userId` | [UserId](UserId.md)
`workspaceId` | string

## Example

```typescript
import type { UsageSetPriceRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiKeyId": null,
  "byFilter": null,
  "cacheReadPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "endDate": null,
  "endpoint": null,
  "ids": null,
  "inputPricePerMillion": null,
  "model": null,
  "outputPricePerMillion": null,
  "priced": null,
  "provider": null,
  "source": null,
  "sourceLabel": null,
  "startDate": null,
  "status": null,
  "tool": null,
  "userId": null,
  "workspaceId": null,
} satisfies UsageSetPriceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageSetPriceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


