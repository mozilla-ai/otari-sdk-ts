
# MessageResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`container` | [MRBetaContainer](MRBetaContainer.md)
`content` | [Array&lt;Content16Inner&gt;](Content16Inner.md)
`model` | [Model](Model.md)
`role` | string
`stopDetails` | [MRRefusalStopDetails](MRRefusalStopDetails.md)
`stopReason` | string
`stopSequence` | string
`type` | string
`usage` | [MRMessageUsage](MRMessageUsage.md)
`contextManagement` | [MRBetaContextManagementResponse](MRBetaContextManagementResponse.md)
`diagnostics` | [MRBetaDiagnosticsFallback](MRBetaDiagnosticsFallback.md)

## Example

```typescript
import type { MessageResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "container": null,
  "content": null,
  "model": null,
  "role": null,
  "stopDetails": null,
  "stopReason": null,
  "stopSequence": null,
  "type": null,
  "usage": null,
  "contextManagement": null,
  "diagnostics": null,
} satisfies MessageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MessageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


