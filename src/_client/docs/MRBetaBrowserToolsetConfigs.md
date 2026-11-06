
# MRBetaBrowserToolsetConfigs

Per-member configuration for ``browser_toolset_20260801``: one optional field per member tool, keyed by the member name — the same name the member\'s ``tool_use`` blocks carry. Every member is an accepted key, and a member\'s defaults apply wherever its key is absent. Unknown keys are rejected: the field set is this toolset version\'s complete member set.

## Properties

Name | Type
------------ | -------------
`closeTab` | [MRBetaBrowserCloseTabConfig](MRBetaBrowserCloseTabConfig.md)
`doubleClick` | [MRBetaBrowserDoubleClickConfig](MRBetaBrowserDoubleClickConfig.md)
`fileUpload` | [MRBetaBrowserFileUploadConfig](MRBetaBrowserFileUploadConfig.md)
`find` | [MRBetaBrowserFindConfig](MRBetaBrowserFindConfig.md)
`formInput` | [MRBetaBrowserFormInputConfig](MRBetaBrowserFormInputConfig.md)
`getPageText` | [MRBetaBrowserGetPageTextConfig](MRBetaBrowserGetPageTextConfig.md)
`holdKey` | [MRBetaBrowserHoldKeyConfig](MRBetaBrowserHoldKeyConfig.md)
`hover` | [MRBetaBrowserHoverConfig](MRBetaBrowserHoverConfig.md)
`javascriptExec` | [MRBetaBrowserJavascriptExecConfig](MRBetaBrowserJavascriptExecConfig.md)
`key` | [MRBetaBrowserKeyConfig](MRBetaBrowserKeyConfig.md)
`leftClick` | [MRBetaBrowserLeftClickConfig](MRBetaBrowserLeftClickConfig.md)
`leftClickDrag` | [MRBetaBrowserLeftClickDragConfig](MRBetaBrowserLeftClickDragConfig.md)
`leftMouseDown` | [MRBetaBrowserLeftMouseDownConfig](MRBetaBrowserLeftMouseDownConfig.md)
`leftMouseUp` | [MRBetaBrowserLeftMouseUpConfig](MRBetaBrowserLeftMouseUpConfig.md)
`listTabs` | [MRBetaBrowserListTabsConfig](MRBetaBrowserListTabsConfig.md)
`middleClick` | [MRBetaBrowserMiddleClickConfig](MRBetaBrowserMiddleClickConfig.md)
`mouseMove` | [MRBetaBrowserMouseMoveConfig](MRBetaBrowserMouseMoveConfig.md)
`navigate` | [MRBetaBrowserNavigateConfig](MRBetaBrowserNavigateConfig.md)
`newTab` | [MRBetaBrowserNewTabConfig](MRBetaBrowserNewTabConfig.md)
`readConsole` | [MRBetaBrowserReadConsoleConfig](MRBetaBrowserReadConsoleConfig.md)
`readNetwork` | [MRBetaBrowserReadNetworkConfig](MRBetaBrowserReadNetworkConfig.md)
`readPage` | [MRBetaBrowserReadPageConfig](MRBetaBrowserReadPageConfig.md)
`rightClick` | [MRBetaBrowserRightClickConfig](MRBetaBrowserRightClickConfig.md)
`screenshot` | [MRBetaBrowserScreenshotConfig](MRBetaBrowserScreenshotConfig.md)
`scroll` | [MRBetaBrowserScrollConfig](MRBetaBrowserScrollConfig.md)
`scrollTo` | [MRBetaBrowserScrollToConfig](MRBetaBrowserScrollToConfig.md)
`switchTab` | [MRBetaBrowserSwitchTabConfig](MRBetaBrowserSwitchTabConfig.md)
`tripleClick` | [MRBetaBrowserTripleClickConfig](MRBetaBrowserTripleClickConfig.md)
`type` | [MRBetaBrowserTypeConfig](MRBetaBrowserTypeConfig.md)
`wait` | [MRBetaBrowserWaitConfig](MRBetaBrowserWaitConfig.md)
`zoom` | [MRBetaBrowserZoomConfig](MRBetaBrowserZoomConfig.md)

## Example

```typescript
import type { MRBetaBrowserToolsetConfigs } from ''

// TODO: Update the object below with actual values
const example = {
  "closeTab": null,
  "doubleClick": null,
  "fileUpload": null,
  "find": null,
  "formInput": null,
  "getPageText": null,
  "holdKey": null,
  "hover": null,
  "javascriptExec": null,
  "key": null,
  "leftClick": null,
  "leftClickDrag": null,
  "leftMouseDown": null,
  "leftMouseUp": null,
  "listTabs": null,
  "middleClick": null,
  "mouseMove": null,
  "navigate": null,
  "newTab": null,
  "readConsole": null,
  "readNetwork": null,
  "readPage": null,
  "rightClick": null,
  "screenshot": null,
  "scroll": null,
  "scrollTo": null,
  "switchTab": null,
  "tripleClick": null,
  "type": null,
  "wait": null,
  "zoom": null,
} satisfies MRBetaBrowserToolsetConfigs

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaBrowserToolsetConfigs
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


