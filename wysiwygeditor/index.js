const m = require("mithril");
const gp = require("gson-pointer");
const View = require("./View");
const AbstractValueEditor = require("editron-core/editor/AbstractValueEditor");

/**
 * Displays a value with a html-wyswig editor and adds an option to open the content in an html-script editor
 */
class WYSIWYGEditor extends AbstractValueEditor {

    static editorOf(pointer, controller) {
        const schema = controller.schema().get(pointer);
        return schema.type === "string" && schema.format === "html";
    }

    constructor(pointer, controller, options) {
        options = Object.assign({
            // modify value type
            editorValueType: "html",
            viewModel: {
                // update data on blur of editor
                onblur: (value) => this.setValue(value)
            }
        }, options);

        super(pointer, controller, options);
        // @legacy fetch editor options
        this.viewModel.mediumEditorOptions = gp.get(this.viewModel, "#/schema/options/mediumEditor") || {};
        this.render();
    }

    render() {
        m.render(this.$element, m(View, this.viewModel));
    }
}


module.exports = WYSIWYGEditor;
