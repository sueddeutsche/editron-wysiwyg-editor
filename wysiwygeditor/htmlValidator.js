const blockElements = "p|h[1-6]|[ou]l|pre|address|blockquote|dl|div|fieldset|form|hr|noscript|table";
const wrappedInBlock = new RegExp(`^(<(${blockElements})>.*</(${blockElements})>)?$`);

function dashCase(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Show a warning if the given html is not wrapped in a block element
 *
 * @param  {Core} core
 * @param  {Object} schema
 * @param  {String} html
 * @param  {String} pointer
 * @return {ErrorObject|undefined}
 */
function validateHTML(core, schema, html, pointer) {
    if (wrappedInBlock.test(html) === false) {
        return {
            type: "error",
            severity: "warning",
            name: "InvalidHTMLError",
            code: dashCase("InvalidHTMLError"),
            message: "The html at '{{pointer}}' should be wrapped in a block element.",
            data: {
                value: html,
                pointer
            }
        };
    }
    return undefined;
}


module.exports = {

    type: "string",
    format: "html",
    validate: validateHTML
};
