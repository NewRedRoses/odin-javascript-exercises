const convertToCelsius = function (fahrenheitTemperature) {
  const FAHRENHEIT_TO_CELSIUS = ((fahrenheitTemperature - 32) * 5) / 9;
  return parseFloat(FAHRENHEIT_TO_CELSIUS.toFixed(1)); // toFixed turns into string, parseFloat reverts to number/float 
};



const convertToFahrenheit = function (celsiusTemperature) {
  const CELSIUS_TO_FAHRENHEIT = (celsiusTemperature / 5) * 9 + 32;
  return parseFloat(CELSIUS_TO_FAHRENHEIT.toFixed(1)); // toFixed turns into string, parseFloat reverts to number/float
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

/*
function "convertToCelsius":
  Input: temperature in fahrenheit
  Output:  temperature in celcius

function "convertToFahrenheit":
  input: temperature in celcius
  output: temperature in fahrenheit

note: Round up 100th decimal place.

Steps to get the wanted output in convertToCelsius:
  subtract 32 from the number, then multiply the result by 5. Finally divide that value by 9. 
  round value by 100th decimal
  Return the value, This is the temperature in celcius


Steps to get the wanted output in convertToFahrenheit: 
  Divide the celcius number by 5, then multiply the result by 9. Finally add 32 to the result. 
  round value by 100th decimal
  Return the value, this is the temperature in fahrenheit. 
*/