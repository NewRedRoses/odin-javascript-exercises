const fibonacci = function (number) {
  if (number >= 0) {
    let fibonacciNumbers = [];
    let n1 = 0,
      n2 = 1,
      nextVal;
    for (let x = 0; x <= number; x++) {
      fibonacciNumbers.push(n1);
      nextVal = n1 + n2;
      n1 = n2;
      n2 = nextVal;
    }
    return fibonacciNumbers[number];
  } else {
    return "OOPS";
  }
};
// Do not edit below this line
module.exports = fibonacci;
