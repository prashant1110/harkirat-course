/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let first = str1.toLowerCase().split("").sort().join("");
  let second = str2.toLowerCase().split("").sort().join("");

  if (str1.length !== str2.length) {
    return false;
  }

  if (first === second) {
    return true;
  }
  return false;
}

module.exports = isAnagram;
