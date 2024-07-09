const convertToCelsius = function(temp) {
  let formula = (temp - 32) * (5/9);
  return Number(formula.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let formula = (temp * (9/5) + 32);
  return Number(formula.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
