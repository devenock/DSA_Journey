// Valid Anagram
// Solved

// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true

// Example 2:

// Input: s = "jar", t = "jam"

// Output: false

// Constraints:

//     s and t consist of lowercase English letters.

// <============ SOLUTION ===============>
function validAnagram(s, t) {
  // first check if the strings have got the same length
  if (s.length !== t.length) {
    return false;
  }

  // declare the freqneucy counter objects
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // loop through the strings to populate the frequecy counter objects
  for (let val of s) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of t) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // iterate over the first frequency counter object as you compare with the second object
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    // check their count
    if (frequencyCounter1[key] > frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}
