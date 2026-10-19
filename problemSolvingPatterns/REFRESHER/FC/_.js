// FREQUENCY COUNTER PATTERN
// Uses has maps to break down a problem and mainly used when comparing two objects(arrays, strings,etc)
// In frequency counter, checking the length is a must before comparing

// example:
// < =====================EXAMPLE 1 ===================== >
// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

//     sameFrequency(182,281) // true
//     sameFrequency(34,14) // false
//     sameFrequency(3589578, 5879385) // true
//     sameFrequency(22,222) // false

// < =====================SOLUTION 1 ===================== >
function sameFrequency(nums1, nums2) {
  // convert each number to a string
  let nums1Str = nums1.toString();
  let nums2Str = nums2.toString();

  // check the length of the two strings to ensure they are the same
  if (nums1Str.length !== nums2Str.length) {
    return false;
  }

  // define the frequencies
  let frequency1 = {};
  let frequency2 = {};

  // loop through each nums string and update the frequencies
  for (let num1 of nums1Str) {
    frequency1[num1] = (frequency1[num1] || 0) + 1;
  }

  for (let num2 of nums2Str) {
    frequency2[num2] = (frequency2[num2] || 0) + 1;
  }

  // compare the frequencies
  for (let key in frequency1) {
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }

    if (!(key in frequency2)) {
      return false;
    }
  }

  return true;
}
