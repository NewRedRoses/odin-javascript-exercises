const removeFromArray = function (arrayOfNumbers, ...numbersToRemove) { // tur
  let cleanArray = [];
  arrayOfNumbers.forEach((number) => {
    if (!numbersToRemove.includes(number)) {
      cleanArray.push(number);
    }
  });
  return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
