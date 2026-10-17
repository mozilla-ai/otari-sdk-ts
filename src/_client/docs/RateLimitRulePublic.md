
# RateLimitRulePublic

One rule in effect, and where it is defined.

## Properties

Name | Type
------------ | -------------
`leaseSec` | number
`maxConcurrent` | number
`models` | Array&lt;string&gt;
`name` | string
`per` | string
`rpm` | number
`source` | string
`tpm` | number
`tpmAdmission` | string
`updatedAt` | Date

## Example

```typescript
import type { RateLimitRulePublic } from ''

// TODO: Update the object below with actual values
const example = {
  "leaseSec": null,
  "maxConcurrent": null,
  "models": null,
  "name": null,
  "per": null,
  "rpm": null,
  "source": null,
  "tpm": null,
  "tpmAdmission": null,
  "updatedAt": null,
} satisfies RateLimitRulePublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RateLimitRulePublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


