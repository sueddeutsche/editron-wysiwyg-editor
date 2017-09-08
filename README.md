# [editron](https://github.com/sueddeutsche/editron) WYSWIG-Editor

`npm i editron-wysiwyg-editor`


## Plugin

Add it to your editors list, e.g.

```js
const editors = [
    require("editron-wysiwyg-editor")
].concat(require("editron-core-editors"));
```

Add required dependencies to your page

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.16.1/js/medium-editor.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.16.1/css/medium-editor.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.16.1/css/themes/bootstrap.css">
```

And optional import the custom wysiwyg-editor styles via sass

```scss
@import "editron-wysiwyg-editor/wysiwyg-editor.scss";
```
