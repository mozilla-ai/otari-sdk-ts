
# UpdateAvatarRequest

The caller\'s own avatar: a preset face by index, or ``null`` for the one their id gives them.

## Properties

Name | Type
------------ | -------------
`face` | number

## Example

```typescript
import type { UpdateAvatarRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "face": null,
} satisfies UpdateAvatarRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAvatarRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


