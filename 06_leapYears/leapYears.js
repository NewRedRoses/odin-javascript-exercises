const leapYears = function (year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true
            }
            return false
        }
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;

/* 

Input: a number
Output: True if it is a leap year, or false if it is not. 

What to do in order to get the output: 
    if year is divisible by 4 alone: return true otherwise false
    if year is divisible by 4 and 100: return false 
    if year is divisible by 4 and 100 and 400: return true.

*/ 