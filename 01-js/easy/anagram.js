/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let first=str1.toLowerCase().split('');
  let second=str2.toLowerCase().split('');

  for(let i=0;i<second.length;i++){
    if(first.includes(second[i])){
     return true
    }
      return false;
  }
}

module.exports = isAnagram;
