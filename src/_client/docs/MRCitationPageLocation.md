
# MRCitationPageLocation


## Properties

Name | Type
------------ | -------------
`citedText` | string
`documentIndex` | number
`documentTitle` | string
`endPageNumber` | number
`fileId` | string
`startPageNumber` | number
`type` | string

## Example

```typescript
import type { MRCitationPageLocation } from ''

// TODO: Update the object below with actual values
const example = {
  "citedText": null,
  "documentIndex": null,
  "documentTitle": null,
  "endPageNumber": null,
  "fileId": null,
  "startPageNumber": null,
  "type": null,
} satisfies MRCitationPageLocation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRCitationPageLocation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


