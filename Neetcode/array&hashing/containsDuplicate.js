// Contains Duplicate
// Solved

// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false
//

// <============= SOLUTION ================>
function containsDuplicates(nums) {
  // nums must always contain values
  if (nums.length === 0) {
    return false;
  }
  // declare the frequency counter object
  let frequencyCounter = {};

  // loop through the array to populate the frequency counter object
  for (let num of nums) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }

  // iterate over the frequencyCounter object to check the keys
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  return false;
}
