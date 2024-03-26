const reverseString = function(phrase) {
    let reverse = "";
    for (let index = phrase.length; index > -1; index--) {
        reverse = reverse + phrase.charAt(index)
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
