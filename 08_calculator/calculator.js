const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
	let totalSum = 0;
  for (let i = 0; i < num.length; i++) {
    totalSum += num[i];
  }
  return totalSum;
};

const multiply = function(num) {
  let total = num[0];
  for (let i = 1; i < num.length; i++) {
    total *= num[i];
  }
  return total;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
