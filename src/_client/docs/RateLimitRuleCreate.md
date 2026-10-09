
# RateLimitRuleCreate

A rule to add. The same fields, limits and validation as a ``rate_limits`` entry in config.yml.

## Properties

Name | Type
------------ | -------------
`leaseSec` | number
`maxConcurrent` | number
`models` | Array&lt;string&gt;
`name` | string
`per` | string
`rpm` | number
`tpm` | number
`tpmAdmission` | string

## Example

```typescript
import type { RateLimitRuleCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "leaseSec": null,
  "maxConcurrent": null,
  "models": null,
  "name": null,
  "per": null,
  "rpm": null,
  "tpm": null,
  "tpmAdmission": null,
} satisfies RateLimitRuleCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RateLimitRuleCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


