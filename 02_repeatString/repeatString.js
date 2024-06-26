const repeatString = function(repeatWord, repeatNumber) {
    let fullWord = "";
    for (let i = 0; i < repeatNumber; i++) {
        fullWord.concat(repeatWord);
    }
    return fullWord;
};

// Do not edit below this line
module.exports = repeatString;
