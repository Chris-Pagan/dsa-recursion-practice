/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
 function reverse(text) {
    if (text.length === 0) return "";
    if (text.length === 1) return text;
    const arr = text.split("");
    arr.reverse();
    const result = arr.join("");
    return result;
}

module.exports = reverse;