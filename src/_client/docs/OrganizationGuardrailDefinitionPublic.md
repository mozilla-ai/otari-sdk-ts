
# OrganizationGuardrailDefinitionPublic

The API-facing shape. Carries the names of the stored secrets and none of their values.

## Properties

Name | Type
------------ | -------------
`buildState` | string
`createKwargs` | { [key: string]: any; }
`createSecrets` | { [key: string]: string; }
`createdAt` | string
`enabled` | boolean
`guardrailName` | string
`id` | string
`name` | string
`organizationId` | string
`secretsDecryptable` | boolean
`updatedAt` | string

## Example

```typescript
import type { OrganizationGuardrailDefinitionPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "buildState": null,
  "createKwargs": null,
  "createSecrets": null,
  "createdAt": null,
  "enabled": null,
  "guardrailName": null,
  "id": null,
  "name": null,
  "organizationId": null,
  "secretsDecryptable": null,
  "updatedAt": null,
} satisfies OrganizationGuardrailDefinitionPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationGuardrailDefinitionPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


