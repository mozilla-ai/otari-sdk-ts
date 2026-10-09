
# RateLimitRuleUpdate

Fields to change on a stored rule. An omitted field keeps its value; ``null`` clears a limit.  The merged rule must still set at least one of rpm, tpm or max_concurrent.

## Properties

Name | Type
------------ | -------------
`leaseSec` | number
`maxConcurrent` | number
`models` | Array&lt;string&gt;
`per` | string
`rpm` | number
`tpm` | number
`tpmAdmission` | string

## Example

```typescript
import type { RateLimitRuleUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "leaseSec": null,
  "maxConcurrent": null,
  "models": null,
  "per": null,
  "rpm": null,
  "tpm": null,
  "tpmAdmission": null,
} satisfies RateLimitRuleUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RateLimitRuleUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


