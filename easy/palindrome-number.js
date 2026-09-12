/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let x2 = Number(x.toString().split('').reverse().join(''));

    if (x === x2) {
        return true

    } else {
        return false
    }
};