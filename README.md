## Features

Adds a few snippets and commands for programming in GMod Lua.


# Table Utility Snippets
`namespace`
    - Emulates a namespace and returns it for use in creating library includes.
`namespace nested`
    - Emulates a namespace table within another namespace. No returning.
`extends namespace`
    - Includes or references another table and then returns it for extending libraries.
`class`
    - Emulates a class using metatables. Should use this within a namespace.
`panel`
    - Creates a panel object with some default functionality and registers it to vgui library.
`panel inline`
    - Creates a panel with vgui.create and sets some default variables
`ent client`
    - Utility for setting up an entity cl_init.lua file
`ent server`
    - Utility for setting up an entity init.lua file
`ent shared`
    - Utility for setting up an entity shared.lua file

# Variable Utility Snippets
`delegate `
    - Simple local function for anchoring.
`class method`
    - Creates a function on a class object.
`static class method`
    - Creates a static function on a class object, **virtually** no difference between this one and `class method` but it doesn't have a self option
`ENT method`
    - Creates a function on the cl_init.lua file of an entity
`panel method`
    - Creates a function on the object created with `panel` !not `panel inline`!
`static method`
    - Creates a global function
`class field`
    - Creates a nicely formatted & anchored variable within the table of a `class` object(Where it puts the cursor at the end)
`let`
    - Creates a local variable with anchoring(Shows up in File Anchors from Comment Anchors)
`class table field`
    - Same as clsas field but for table variables within the class table

# Commands
`Add Region Identifiers`
    - Will add identifiers at the start and end of your selection for organizing code in the Comment Anchors


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
    