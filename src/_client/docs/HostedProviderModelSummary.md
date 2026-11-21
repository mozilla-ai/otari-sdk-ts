
# HostedProviderModelSummary

How many models a hosted provider offers, how many it serves, and what holds the rest back.  ``serving`` counts a model switched on whose vendor is switched on too. ``unpriced`` counts a model held off for want of a rate, and ``vendors_off`` the vendors the provider does not serve.

## Properties

Name | Type
------------ | -------------
`serving` | number
`total` | number
`unpriced` | number
`vendorsOff` | number

## Example

```typescript
import type { HostedProviderModelSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "serving": null,
  "total": null,
  "unpriced": null,
  "vendorsOff": null,
} satisfies HostedProviderModelSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedProviderModelSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


