
# DisabledReason

Represents the reason an API key cannot be enabled.  Every reason blocks the key\'s owner. Some also block an operator, which ``operator_may_clear`` records. A key with no reason set can be enabled by its owner.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { DisabledReason } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies DisabledReason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DisabledReason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


