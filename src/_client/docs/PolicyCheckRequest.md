
# PolicyCheckRequest

A policy body plus the evidence to check it against, both caller-supplied.

## Properties

Name | Type
------------ | -------------
`checkResults` | [Array&lt;CheckVerdictRequest&gt;](CheckVerdictRequest.md)
`commandScope` | string
`commands` | Array&lt;string&gt;
`judgeResults` | [Array&lt;JudgeVerdictRequest&gt;](JudgeVerdictRequest.md)
`pathSource` | string
`paths` | Array&lt;string&gt;
`policyYaml` | string

## Example

```typescript
import type { PolicyCheckRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "checkResults": null,
  "commandScope": null,
  "commands": null,
  "judgeResults": null,
  "pathSource": null,
  "paths": null,
  "policyYaml": null,
} satisfies PolicyCheckRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PolicyCheckRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


