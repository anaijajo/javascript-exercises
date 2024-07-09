const sumAll = function(firstNum, lastNum) {
    if (typeof firstNum !== "number" || firstNum < 0 || typeof lastNum !== "number" || lastNum < 0) return "ERROR";
    let finalSum = 0;
    if (firstNum < lastNum) {
        for (let num = firstNum; num < lastNum + 1; num++) {
            finalSum += num;
        }
    } else {
        for (let num = lastNum; num < firstNum + 1; num++) {
            finalSum += num;
        }
    }
    
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
