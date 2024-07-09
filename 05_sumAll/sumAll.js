const sumAll = function(firstNum, lastNum) {
    let finalSum = 0;
    for (let num = firstNum; num < lastNum + 1; num++) {
        finalSum += num;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
