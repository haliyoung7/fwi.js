/**
 * This method replaces illegal charecters in the font strings so they aren't
 * inturpreted by javascript!
 */
String.prototype.ReplaceIllegalChars = function (prefix) {
    //This method replaces { } and , with variable names so CM can read the JSON properly
    var OutputString = this.replace(/{/g, "{&lb");
    OutputString = OutputString.replace(/}/g, "&rb}");
    OutputString = OutputString.replace(/,/g, "{&var:" + prefix + "_comma}");
    OutputString = OutputString.replace(/{&lb/g, "{&lb}");
    OutputString = OutputString.replace(/&rb}/g, "{&rb}");
    return OutputString;
};
/**
 * This adds a startsWith method to all strings to see if they start with a specific prefix.
 */
String.prototype.startsWith = function (prefix) {
    return this.slice(0, prefix.length) == prefix;
};
