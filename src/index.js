module.exports = function reverse (n) {
    const stringN = String(Math.abs(n));
    let newString = '';

    for (let item of stringN) {
        newString = item + newString
    }
    return +newString;
}
