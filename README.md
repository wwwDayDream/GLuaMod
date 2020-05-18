## Features

Adds a few snippets for programming in GMod Lua.

`namespace`
```markdown
Create object containers with this.
Generates a local object that is returned at the end of the file for use with `include()`.
```
 - `{namespace}.As(str)`
     - `include('module.lua').As('LibraryName')`
        - Creates a global copy of the imported library w/ name = (str)

![Namespace Gif](https://i.imgur.com/SnGrBx2.gif)

----------

`namespace nested`
```markdown
Generates a object that is placed inside a namespace object.
```
 - `{parent}.{namespace}.As(str)`
     - `include('{parent}.lua').{namespace}.As(str)`
        - Creates a global copy of the imported sub-library w/ name = (str)

![Namespace Nested Gif](https://i.imgur.com/fbxD8dT.gif)

----------

`extends namespace`
```markdown
Create object container that is derived from another namespace(object).
Returns it at the end of the file for `include()`
```

![Extends Namespace Gif](https://i.imgur.com/o5Ojdna.gif)

----------

`delegate`
```markdown
Simulates a local function but with Anchoring.
```

![Delegate Gif](https://i.imgur.com/Gu8VIJE.gif)



## Requirements
*Preface: These are not required but it makes the experience much more enjoyable and less... diggy*

HIGHLY suggested you get [Comment Anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors) **AND** insert the following anchors into the settings file.

```json
{
    "tag": "{()}",
    "iconColor": "green",
    "highlightColor": "#A8C023",
    "scope": "file",
    "isRegion": true
},
{
    "tag": "{__}",
    "iconColor": "blue",
    "highlightColor": "#3ea8ff",
    "scope": "workspace"
},
{
    "tag": "{__t}",
    "iconColor": "blue",
    "highlightColor": "#3ea8ff",
    "scope": "workspace",
    "isRegion": true
},
{
    "tag": "{@}",
    "iconColor": "red",
    "highlightColor": "#F44336",
    "scope": "workspace",
    "isRegion": true
},
{
    "tag": "{-}",
    "iconColor": "red",
    "highlightColor": "#C10000",
    "scope": "workspace",
    "isRegion": true
},
{
    "tag": "{*}",
    "iconColor": "pink",
    "highlightColor": "#35756A",
    "scope": "workspace",
    "isRegion": true
},
{
    "tag": "{+}",
    "iconColor": "orange",
    "highlightColor": "#FFB300",
    "scope": "workspace",
    "isRegion": true
},
{
    "tag": "{=_=}",
    "enabled": true,
    "scope": "file",
    "iconColor": "green",
    "highlightColor": "#64DD17"
},
{
    "tag": "{^}",
    "iconColor": "blurple",
    "highlightColor": "#896afc",
    "scope": "workspace",
    "isRegion": true
},
{
    "tag": "{%}",
    "iconColor": "teal",
    "highlightColor": "#03a6a6",
    "scope": "workspace",
    "isRegion": true
}
```

## Known Issues

None As of v(0.4.0)

## Release Notes
- **v(0.4.0)**
    - Updated README.md with some pretty gifs
    - Overhauled anchor tags to make it more tree appealing.
    - Repaired Class snippet.
    - Extended Class snippet to allow for a fields anchor. Prettier
    - Extended Class Method snippet functionality to allow NO additional variables easier.
    - Bug fix to all method snippets
    - Extended namespace classes to allow for a fields anchor aswell.
    - Added GLua ENT method for adding entity methods
    - Added GLua ENT server for creating entity files
    - Added GLua ENT shared for creating entity files
    - Added GLua ENT client for creating entity files
    - Modified Class Table Field and Class Field to have better formatting w/ commas.
    - Added inheritence to Class.
    - Added Extends Namespace snippet for including a library and adding to its table, then return that table.
    - Added Panel Method
    - Modified Panel class to add some utilities for keybinding.
    - Added `Add Region Identifiers` command to easily create a region within code for organizing the Anchors tree.
    - Added inline panel for creating sub items within a panel
    - Bug fixes for panel.
    - Added more default fields/functionality to panel.
    - Improved Panel paint method

- **v(0.3.0)**
    - Minor fixes to Lua Field snippet.
    - Minor fixes to Lua Namespace snippet.
    - Added static class method for clarity.
    - Added a Lua Table Field snippet to add table vars to a table and anchor them.
    - Adjustments to Class snippet
    - Improved 'new' call on objects
    - Added type returns and arguments to methods
    - Update class call to be static
    - Bug Fix with class snippet
    - Added back a local var, it's useful again.
    - Updated let var to have better decleration/options
    - Updated README.md

- **v(0.2.0)**
    - Added a Lua Field(class) snippet to add vars to a table and anchor them.
    - Removed local var, it wasn't really an improvement
    - Added local var
    - Minor adjustments to snippets and anchors
    - Added support for Comment Anchors
    - Added a delegate
        - This represents a local function
    - Added a static method
        - This represents a global function
    - Added a class method
        - This is a function stored in a table, implements namespace and class

- **v(0.1.2)**
    - Added a nested namespace.

- **v(0.1.1)**
    - Added a GLua VGUI snippet for creating panels quickly and easily.

- **v(0.1.0)**
    - Made editing the common metamethods a little less tedious. If you need a few you want them all and if you don't need one you probably don't need any utility metamethods.

- **v(0.0.2)**
    - Added common metamethods to Lua Class snippet.

- **v(0.0.1)**
    - Added Lua Namespace snippet.
    - Added Lua Class snippet
    