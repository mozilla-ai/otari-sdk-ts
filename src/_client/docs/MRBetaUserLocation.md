
# MRBetaUserLocation


## Properties

Name | Type
------------ | -------------
`type` | string
`city` | string
`country` | string
`region` | string
`timezone` | string

## Example

```typescript
import type { MRBetaUserLocation } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "city": null,
  "country": null,
  "region": null,
  "timezone": null,
} satisfies MRBetaUserLocation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaUserLocation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


