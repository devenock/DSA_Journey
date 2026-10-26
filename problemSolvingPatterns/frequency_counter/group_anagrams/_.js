// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"], ["act", "cat"], ["stop", "pots", "tops"]]

// Example 2:
// Input: strs = ["x"]
// Output: [["x"]]

// Example 3:
// Input: strs = [""]
// Output: [[""]]

// SOLUTION
// PSEUDOCODE
// 1. Create a hash map where each key is the sorted version of a string and
// the value is a list of strings belonging to that anagram group.
// 2.Iterate through each string in the input list:
//    - Sort the characters of the string to form a key
//    - Append the original string to the list corresponding to this key.
// 3. After processing all strings, return all values from the hash map, which represent the grouped anagrams.

function groupAnagrams(strs) {
  const strHash = {};
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("");
    if (!strHash[sorted]) {
      strHash[sorted] = [];
    }
    strHash[sorted].push(strs[i]);
  }
  return Object.values(strHash);
}
