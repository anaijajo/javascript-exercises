const sumAll = function(firstNum, lastNum) {
    if (typeof firstNum !== "number" || firstNum < 0 || typeof lastNum !== "number" || lastNum < 0) return "ERROR";
    let finalSum = 0;
    for (let num = firstNum; num < lastNum + 1; num++) {
        finalSum += num;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
