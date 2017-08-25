module.exports = function isEmptyHTML(string) {
    if (string == null || typeof string !== "string") {
        return true;
    }

    string = string.replace(/<[^>]+>/g, "").replace(/[^A-Za-z0-9]/g, "");
    return string.length === 0;
};
