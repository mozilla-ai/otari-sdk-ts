
# OrganizationGuardrailDefinitionUpdate

Partial update. Only the fields the caller sets are applied.  ``create_kwargs`` replaces the arguments whole when sent, and an argument the catalog marks secret keeps its stored value where the caller echoes back the ``***`` a read gave them. Omitting it leaves both columns untouched *and reads neither*, which is what lets an admin on a deployment whose ``OTARI_SECRET_KEY`` has moved still flip ``enabled`` and repair the row by typing the credential again.  Changing ``guardrail_name`` without sending ``create_kwargs`` re-splits the stored arguments under the new class, because the plain/secret split is the old class\'s answer and would otherwise go stale.

## Properties

Name | Type
------------ | -------------
`createKwargs` | { [key: string]: any; }
`enabled` | boolean
`guardrailName` | string
`name` | string

## Example

```typescript
import type { OrganizationGuardrailDefinitionUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "createKwargs": null,
  "enabled": null,
  "guardrailName": null,
  "name": null,
} satisfies OrganizationGuardrailDefinitionUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationGuardrailDefinitionUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


