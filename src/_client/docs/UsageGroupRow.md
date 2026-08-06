
# UsageGroupRow

One breakdown row (a model, a user, an API key, a session, ...).  ``key`` is None both for the synthesized fold row (``is_other=True``) and for a real group whose column was NULL (e.g. usage from a since-deleted user, with ``is_other=False``). ``is_other`` disambiguates the two so the UI does not mislabel deleted-user usage as the fold.

## Properties

Name | Type
------------ | -------------
`cost` | number
`isOther` | boolean
`key` | string
`requests` | number
`tokens` | number

## Example

```typescript
import type { UsageGroupRow } from ''

// TODO: Update the object below with actual values
const example = {
  "cost": null,
  "isOther": null,
  "key": null,
  "requests": null,
  "tokens": null,
} satisfies UsageGroupRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageGroupRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


