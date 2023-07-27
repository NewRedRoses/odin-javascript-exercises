const reverseString = function (text) {
  let reversedText = "";
  for (let x = text.length - 1; x >= 0; x--) {
    reversedText += text[x];
  }
  return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
