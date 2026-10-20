// PROBLEM
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// Two strings are anagrams if they contain the same characters, with each character appearing the same number of times, regardless of order.
// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true

// Example 2:
// Input: s = "jar", t = "jam"
// Output: false

// SOLUTION
function isAnagram(s, t) {
  // compare the length and if not the same, return false
  if (s.length !== t.length) {
    return false;
  }

  // define their frequencies
  let sFrequency = {};
  let tFrequency = {};

  // loop through each string to update their frequencies
  for (let char of s) {
    sFrequency[char] = (sFrequency[char] || 0) + 1;
  }

  for (let char of t) {
    tFrequency[char] = (tFrequency[char] || 0) + 1;
  }

  // iterate over the frequencies to compare the keys
  for (let key in sFrequency) {
    if (!(key in tFrequency)) {
      return false;
    }
    // check frequency count of each key
    if (sFrequency[key] > tFrequency[key]) {
      return false;
    }
  }

  return true;
}
