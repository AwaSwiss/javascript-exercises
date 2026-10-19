function isPunctuation(char) {
    return /\p{P}/u.test(char);
}

function isSpace(char) {
    return char === " ";
}

const palindromes = function (string) {
    const arr = string.toLowerCase().split("");
    const filtered = arr.filter((char) => !isPunctuation(char) && !isSpace(char));
    const arrReversed = filtered.toReversed();

    console.log(arr);
    console.log(filtered);
    console.log(arrReversed);

    let i = 0;
    let isPalindrome = true;
    while (i<filtered.length && isPalindrome == true) {
        if (filtered[i] !== arrReversed[i]) {
            isPalindrome = false;
        }
        i++;
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
