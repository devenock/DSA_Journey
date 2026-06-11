// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// Example 1:

// Input:
// nums = [3,4,5,6], target = 7

// Output: [0,1]

// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

// Example 2:

// Input: nums = [4,5,6], target = 10

// Output: [0,2]

// Example 3:

// Input: nums = [5,5], target = 10

// Output: [0,1]

// Constraints:

//     2 <= nums.length <= 1000
//     -10,000,000 <= nums[i] <= 10,000,000
//     -10,000,000 <= target <= 10,000,000
//     Only one valid answer exists.

function numTarget(nums, target) {
  // check array length
  if (nums.length === 0) {
    return undefined;
  }
  // define the start and end pointers(indices) on the nums array
  let start = 0;
  let end = nums.length - 1;
  // loop through the array
  while (start < end) {
    if (nums[start] + nums[end] === target) {
      return [start, end];
    } else if (nums[start] + nums[end] > target) {
      end--;
    } else {
      start++;
    }
  }
}

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.
function countUniqueValues(arr) {
  // check first the length of the array
  if (arr.length === 0) {
    return 0;
  }

  // declare starting index
  let start = 0;

  // loop through the array as you compare
  for (let val = 0; val < arr.length; val++) {
    if (arr[start] !== arr[val]) {
      start++;
      arr[start] = arr[val];
    }
  }
  return start + 1;
}
