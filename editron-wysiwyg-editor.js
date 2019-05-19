const plugin = require("editron/plugin");


plugin.editor(require("./wysiwygeditor"));
plugin.validator("format", "html", require("./wysiwygeditor/htmlValidator").validate);
