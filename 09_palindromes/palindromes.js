const palindromes = function (word) {
    /* A palindrome is a word that when reversed it reverses to exactly the same word
     * Input: A word 
     * Output: True if it is a palindrome or false if not 
     * 
     * steps to get to following output given the input: 
     * 
     *  We need clean the word from spaces and non valid characters.
     *  Create a new variable to hold the reversed word (x)
     *  Iterate through every single word starting from the last word and ending at the first word:
     *      At every word, append the character to the new variable.
     *  Compare if the reversed word is equals to the original word:
     *      If it is: Return true.
     *      Otherwise: Return false. 
     *
     *   */
    // Clean the words to literally only be letters
    word = word.replace(" ", "").replace(/\W/g, '').replace(',','');
    word = word.toLowerCase();
    // Actual reversal and comparison
    let reversedWord = "";
    for (let x = word.length - 1; x >= 0; x--){
        reversedWord += word[x];
    }
  return reversedWord == word;
     

};
// Do not edit below this line
module.exports = palindromes;
