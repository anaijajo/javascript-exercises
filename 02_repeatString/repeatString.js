const repeatString = function(repeatWord, repeatNumber) {
    if (repeatNumber < 0) return "ERROR";
    let fullWord = '';
    for (let i = 0; i < repeatNumber; i++) {
        fullWord += repeatWord;
    }
    return fullWord;
};

// Do not edit below this line
module.exports = repeatString;
