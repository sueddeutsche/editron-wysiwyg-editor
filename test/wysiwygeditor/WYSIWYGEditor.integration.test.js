const WYSIWIGEditor = require("../../wysiwygeditor");
const testEditorIntegration = require("editron-core/test/support/testEditorIntegration");


testEditorIntegration(
    WYSIWIGEditor,
    "#/wysiwyg",
    require("../support/schema.json"),
    require("../support/data.json")
);
