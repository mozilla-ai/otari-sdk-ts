
# MRCitationCharLocation


## Properties

Name | Type
------------ | -------------
`citedText` | string
`documentIndex` | number
`documentTitle` | string
`endCharIndex` | number
`fileId` | string
`startCharIndex` | number
`type` | string

## Example

```typescript
import type { MRCitationCharLocation } from ''

// TODO: Update the object below with actual values
const example = {
  "citedText": null,
  "documentIndex": null,
  "documentTitle": null,
  "endCharIndex": null,
  "fileId": null,
  "startCharIndex": null,
  "type": null,
} satisfies MRCitationCharLocation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRCitationCharLocation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


