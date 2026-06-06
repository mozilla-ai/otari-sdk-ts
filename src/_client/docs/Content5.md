
# Content5


## Properties

Name | Type
------------ | -------------
`errorCode` | string
`errorMessage` | string
`type` | string
`content` | string
`fileType` | string
`numLines` | number
`startLine` | number
`totalLines` | number
`isFileUpdate` | boolean
`lines` | Array&lt;string&gt;
`newLines` | number
`newStart` | number
`oldLines` | number
`oldStart` | number

## Example

```typescript
import type { Content5 } from ''

// TODO: Update the object below with actual values
const example = {
  "errorCode": null,
  "errorMessage": null,
  "type": null,
  "content": null,
  "fileType": null,
  "numLines": null,
  "startLine": null,
  "totalLines": null,
  "isFileUpdate": null,
  "lines": null,
  "newLines": null,
  "newStart": null,
  "oldLines": null,
  "oldStart": null,
} satisfies Content5

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Content5
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


