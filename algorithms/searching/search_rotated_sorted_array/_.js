// MODIFIED BINARY SEARCH
// It is an advanced coding pattern that involves tweaking the traditional binary search
// algorithm to solve specific problems efficiently.

// Unlike standard binary search which focuses on finding the exact match, modified binary search adapts to handle variations
// such as finding the peak element in a rotated sorted array or the maximum value in a bitonic array.

// This pattern typically involves adjusting the binary search logic to decide whether to move left or right
// based on specific conditions other than direct comparison with the target value.

// EXAMPLE 1:
// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:
// [3,4,5,6,1,2] if it was rotated 4 times.
// [1,2,3,4,5,6] if it was rotated 6 times.
// Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.
// You may assume all elements in the sorted rotated array nums are unique,
// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// Example 1:
// Input: nums = [3,4,5,6,1,2], target = 1
// Output: 4

// Example 2:
// Input: nums = [3,5,6,0,1,2], target = 4
// Output: -1
// SOLUTION:
function searchRotatedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    // first compare what we have on the left side against the mid value
    if (nums[left] <= nums[mid]) {
      // then compare the left value with the target and the target with the mid value
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - l;
      } else {
        left = mid + 1;
      }
    } else {
      // now compare the mid value with the right value
      if (nums[mid] < target && target <= nums[r]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
