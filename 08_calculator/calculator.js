const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  sum = array.reduce((total, current) => {
    return total + current;
  }, 0);
  return sum;
};

const multiply = function (values) {
  let answer = 0;
  answer = values.reduce((previous, currentValue) => {
    return previous * currentValue;
  }, 1);
  return answer;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (number) {
  if (number < 0) return "Undefined";
  let fact = 1;
  for (let i = number; i > 1; i--) fact *= i;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
