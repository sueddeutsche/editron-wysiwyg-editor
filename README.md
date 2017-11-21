# [editron](https://github.com/sueddeutsche/editron) WYSIWYG-Editor

`npm i editron-wysiwyg-editor --save`


## Setup

### Add the bundled editor as a plugin

> Use bundled versions of this editor


Add the editor after the core-modules and it will register automatically (paths depend on your build-setup)

```html
<!-- dependencies for the wyswiwyg-editor -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.16.1/js/medium-editor.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.16.1/css/medium-editor.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.16.1/css/themes/bootstrap.css">
<!-- styles -->
<link rel="stylesheet" href="../node_modules/editron-wysiwyg-editor/dist/editron-wysiwyg-editor.css">

<!-- plugin editor -->
<script type="text/javascript" src="../node_modules/editron-core/dist/editron-modules.js"></script>
<script type="text/javascript" src="../node_modules/editron-core/dist/editron-core.js"></script>
<script type="text/javascript" src="../node_modules/editron-wysiwyg-editor/dist/editron-wysiwyg-editor.js"></script>
```


### Custom build the editor

> bundle the editor with webpack


#### Javascript

To use this editor within a webpack build, require the editor and add it to the editors list

```js
const editronWysiwygEditor = require("editron-wysiwyg-editor");
const editors = [
    editronWysiwygEditor
    ...otherEditors
];
const editron = new Editron(schema, data, { editors });
```

Add the required wysiwyg-dependencies to your page

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.16.1/js/medium-editor.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.16.1/css/medium-editor.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.16.1/css/themes/bootstrap.css">
```


#### Validators

Optionally register the htmlValidator to editron

```js
const editron = new Editron(schema, data);
editron.addValidator("format", "html", require("./wysiwygeditor/htmlValidator").validate);
```


#### Styles

Optionally import the custom wysiwyg-editor styles via sass

```scss
@import "editron-wysiwyg-editor/editron-wysiwyg-editor.scss";
```

or simply add the bundled css-file (path is depending on your build-setup)

```html
<link rel="stylesheet" href="../node_modules/editron-wysiwyg-editor/dist/editron-wysiwyg-editor.css">
```


## Schema

The editor will be added for a matching schema like

```json
{
    "type": "string",
    "format": "html",

    "options": {
        "mediumEditor": {}
    }
}
```

