
# MRBetaComputerToolsetConfigs

Per-member configuration for ``computer_toolset_20260801``: one optional field per member tool, keyed by the member name — the same name the member\'s ``tool_use`` blocks carry. Every member is an accepted key, and a member\'s defaults apply wherever its key is absent. Unknown keys are rejected: the field set is this toolset version\'s complete member set.

## Properties

Name | Type
------------ | -------------
`cursorPosition` | [MRBetaComputerCursorPositionConfig](MRBetaComputerCursorPositionConfig.md)
`doubleClick` | [MRBetaComputerDoubleClickConfig](MRBetaComputerDoubleClickConfig.md)
`holdKey` | [MRBetaComputerHoldKeyConfig](MRBetaComputerHoldKeyConfig.md)
`key` | [MRBetaComputerKeyConfig](MRBetaComputerKeyConfig.md)
`leftClick` | [MRBetaComputerLeftClickConfig](MRBetaComputerLeftClickConfig.md)
`leftClickDrag` | [MRBetaComputerLeftClickDragConfig](MRBetaComputerLeftClickDragConfig.md)
`leftMouseDown` | [MRBetaComputerLeftMouseDownConfig](MRBetaComputerLeftMouseDownConfig.md)
`leftMouseUp` | [MRBetaComputerLeftMouseUpConfig](MRBetaComputerLeftMouseUpConfig.md)
`middleClick` | [MRBetaComputerMiddleClickConfig](MRBetaComputerMiddleClickConfig.md)
`mouseMove` | [MRBetaComputerMouseMoveConfig](MRBetaComputerMouseMoveConfig.md)
`rightClick` | [MRBetaComputerRightClickConfig](MRBetaComputerRightClickConfig.md)
`screenshot` | [MRBetaComputerScreenshotConfig](MRBetaComputerScreenshotConfig.md)
`scroll` | [MRBetaComputerScrollConfig](MRBetaComputerScrollConfig.md)
`tripleClick` | [MRBetaComputerTripleClickConfig](MRBetaComputerTripleClickConfig.md)
`type` | [MRBetaComputerTypeConfig](MRBetaComputerTypeConfig.md)
`wait` | [MRBetaComputerWaitConfig](MRBetaComputerWaitConfig.md)
`zoom` | [MRBetaComputerZoomConfig](MRBetaComputerZoomConfig.md)

## Example

```typescript
import type { MRBetaComputerToolsetConfigs } from ''

// TODO: Update the object below with actual values
const example = {
  "cursorPosition": null,
  "doubleClick": null,
  "holdKey": null,
  "key": null,
  "leftClick": null,
  "leftClickDrag": null,
  "leftMouseDown": null,
  "leftMouseUp": null,
  "middleClick": null,
  "mouseMove": null,
  "rightClick": null,
  "screenshot": null,
  "scroll": null,
  "tripleClick": null,
  "type": null,
  "wait": null,
  "zoom": null,
} satisfies MRBetaComputerToolsetConfigs

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaComputerToolsetConfigs
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


