
# AutomaticFallbackPublic

One model the caller\'s organization used in the window, and the fallback a catalog ID gives it.

## Properties

Name | Type
------------ | -------------
`fellBack` | number
`id` | string
`name` | string
`offerings` | [Array&lt;FallbackOfferingPublic&gt;](FallbackOfferingPublic.md)
`pinned` | number
`pinnedProvider` | string
`requests` | number

## Example

```typescript
import type { AutomaticFallbackPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "fellBack": null,
  "id": null,
  "name": null,
  "offerings": null,
  "pinned": null,
  "pinnedProvider": null,
  "requests": null,
} satisfies AutomaticFallbackPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AutomaticFallbackPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


