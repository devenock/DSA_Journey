// PROBLEM:
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false

// NAIVE SOLUTION: (NESTED LOOP: time: O(n^2), space: O(1))
function hasDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

// SORTING SOLUTION: time: O(n log n), space: O(1) or O(n)
function hasDuplicate2(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}

// HASH SET SOLUTION: time: O(n), space: O(n)
function hasDuplicate3(nums) {
  if (nums.length <= 0) {
    return false;
  }
  let numsFrequency = {};
  // loop through nums to update the frequency has
  for (let num of nums) {
    numsFrequency[num] = (numsFrequency[num] || 0) + 1;
  }
  // check if there is a key whose value is greater than 1
  for (let key in numsFrequency) {
    if (numsFrequency[key] > 1) {
      return true;
    }
  }
  return false;
}
