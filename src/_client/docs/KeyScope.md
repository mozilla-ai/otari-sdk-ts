
# KeyScope

One group of endpoints an API key may be granted, named ``resource:action``.  Ordered by resource, not A-Z: the order is what a stored list is normalized to and what the dashboard renders, and the end-user scopes come last because only a service key may hold them.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { KeyScope } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies KeyScope

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KeyScope
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


