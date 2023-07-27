const sumAll = function (first, second) {
  let start = first;
  let end = second;

  if (first > second) {
    // Swap start and end values if first is greater than second
    start = second;
    end = first;
  }
  if (first < 0 || second < 0) {
    return "ERROR";
  }
  if (typeof first != "number" || typeof second != "number") {
    return "ERROR";
  }

  let sum = 0;
  for (let x = start; x <= end; x++) {
    sum += x;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
