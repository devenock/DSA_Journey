// frequency counter pattern
//
// Example problem
// Write a function called **same**, which accepts two arrays. The function should return true if every value in the array has it's corresponding
// value squared in the second array. The frequency of the values must be the same.

// BRUTE FORCE SOLUTION
function same(arr1, arr2) {
  // check the length of the two arrays to ensure they are the same
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// OPTIMIZED SOLUTION
function sameCheck(arr1, arr2) {
  // check array length
  if (arr1.length != arr2.length) {
    return false;
  }

  let frequency1 = {};
  let frequency2 = {};

  // loop through the first array and assign frequency of frequency1 keys
  for (let val of arr1) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }

  // loop through the second array and and assign frequency of frequency1 keys
  for (let val of arr2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }

  for (let key in frequency1) {
    if (!(key ** 2 in frequency2)) {
      return false;
    }
  }

  return true;
}

// ANAGRAM
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
  // check if the trings have got the same number of characters
  if (str1.length !== str2.length) {
    return false;
  }
  // create the frequencies
  let strFreq1 = {};
  let strFreq2 = {};

  // loop and count the frequencies
  for (let val of str1) {
    strFreq1[val] = (strFreq1[val] || 0) + 1;
  }

  // loop and count the frequencies
  for (let val of str2) {
    strFreq2[val] = (strFreq2[val] || 0) + 1;
  }

  // compare the frequencies
  for (let key in strFreq1) {
    if (!(key in strFreq2)) {
      return false;
    }
  }
  return true;
}

// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

// Constraints:

//     0 <= nums.length <= 10^5
//     -10^9 <= nums[i] <= 10^9
//

function hasDuplicate(nums) {
  // check array length
  if (nums.length == 0) {
    return false;
  }

  let numFreq = {};

  for (let val of nums) {
    numFreq[val] = (numFreq[val] || 0) + 1;
  }

  for (let key in numFreq) {
    if (numFreq[key] > 1) {
      return true;
    }
  }
  return false;
}
