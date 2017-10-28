const blockElements = "p|h[1-6]|[ou]l|pre|address|blockquote|dl|div|fieldset|form|hr|noscript|table";
const wrappedInBlock = new RegExp(`^[\n ]*(<(${blockElements})[^>]*>.*</(${blockElements})>)?[\n ]*$`);

function dashCase(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function isWrappedInBlock(html) {
    return !(typeof html === "string" && html.length > 0 && wrappedInBlock.test(html) === false);
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
    if (schema.type !== "string" || schema.format !== "html") {
        return undefined;
    }

    if (isWrappedInBlock(html) === false) {
        return {
            type: "error",
            severity: "warning",
            name: "MissingBlockElementWarning",
            code: dashCase("MissingBlockElementWarning"),
            message: "The contents should be wrapped in a html block element.",
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
    validate: validateHTML,
    isWrappedInBlock
};
