const WYSIWIGEditor = require("../../wysiwygeditor");
const testEditorIntegration = require("editron/test/support/testEditorIntegration");


testEditorIntegration(
    WYSIWIGEditor,
    "#/wysiwyg",
    require("../support/schema.json"),
    require("../support/data.json")
);
