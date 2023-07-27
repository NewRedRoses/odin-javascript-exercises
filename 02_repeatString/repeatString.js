const repeatString = function (text, amountToRepeat) {
    let output = ''
    if (amountToRepeat < 0) {
      return "ERROR";
    } else {
      for (let x = 0; x < amountToRepeat; x++) {
        output += text;
      }
      return output;
    }
    
    

};

// Do not edit below this line
module.exports = repeatString;
