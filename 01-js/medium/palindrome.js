/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let string = str.toLowerCase().split("");
  let arr = [];
  for (let i = string.length - 1; i >= 0; i--) {
    arr.push(string[i]);
  }
  let newString = arr.join("");
  console.log(str.toLowerCase().replace(/\s+/g, ""));
  console.log(newString.replace(/\s+/g, ""));
  if (
    str.toLowerCase().replace(/\s+/g, "") === newString.replace(/\s+\,/g, "")
  ) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
