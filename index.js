function isPalindrome(word) {
  // Write your algorithm here
  function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}
}

/* 
  Add your pseudocode here
    reverse the input string

  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
     
  I need to make a isPalindrome function that returns either true or false. When
  the input string is the same forwards and backwards, I should return true. That
  means that if the input string is the same after I reverse it, I should return
  true.
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("racecar");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
