const plugin = require("editron-core/plugin");


plugin.editor(require("./wysiwygeditor"));
plugin.validator("format", "html", require("./wysiwygeditor/htmlValidator").validate);
