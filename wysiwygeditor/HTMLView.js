const m = require("mithril");
let CodeMirror = require("codemirror");
const isNodeContext = require("editron/utils/isNodeContext");

if (!isNodeContext()) { // eslint-disable-line no-negated-condition
    require("codemirror/lib/codemirror.css");
    require("codemirror/mode/htmlmixed/htmlmixed");
    require("codemirror/theme/base16-light.css");
} else {
    // @todo mock library in test only
    CodeMirror = {
        fromTextArea() {
            return {
                on: Function.prototype,
                setValue: Function.prototype,
                getValue: Function.prototype,
                toTextArea: Function.prototype
            };
        }
    };
}


module.exports = {

    initEditor($textarea, content, onchange) {
        this.htmlEditor = CodeMirror.fromTextArea($textarea, {
            mode: "htmlmixed",
            theme: "base16-light",
            lineWrapping: true
        });

        this.htmlEditor.on("blur", () => onchange(this.htmlEditor.getValue()));
    },

    onremove() {
        this.htmlEditor.toTextArea();
    },

    view(vnode) {
        return m(".editron-html-overlay",
            {
                style: "min-width: 540px;"
            },
            m("textarea", {
                oninit: () => console.log("init textarea"),
                oncreate: (node) => this.initEditor(node.dom, vnode.attrs.value, vnode.attrs.onchange)
            }, vnode.attrs.value)
        );
    }
};
