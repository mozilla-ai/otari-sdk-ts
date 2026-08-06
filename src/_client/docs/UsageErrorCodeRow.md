
# UsageErrorCodeRow

One error-taxonomy row: the failures in the window sharing a status code.  ``status_code`` is None for failures recorded without one (rows written before the column existed, and failures no HTTP status describes, e.g. a stream that finished without usage data under the ``fail`` policy). ``error_class`` is the coarse display bucket derived from the code, so a UI can group \"provider fault\" against \"my own misconfiguration\" without re-deriving a status ladder; the raw code stays alongside it for precision.

## Properties

Name | Type
------------ | -------------
`errorClass` | string
`requests` | number
`statusCode` | number

## Example

```typescript
import type { UsageErrorCodeRow } from ''

// TODO: Update the object below with actual values
const example = {
  "errorClass": null,
  "requests": null,
  "statusCode": null,
} satisfies UsageErrorCodeRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageErrorCodeRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


