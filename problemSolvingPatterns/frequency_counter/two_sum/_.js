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
// Output: [0, 2]

// Example 3:
// Input: nums = [5,5], target = 10
// Output: [0,1]

// SOLUTION

// brute force solution: O(n^2)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

// sorting solution
// STEPS:
// 1. Create an empty array
// 2. Loop through the nums array to fill the new array
// 3. Sort the new array
// 4. Use Two Pointers on the new array to find the sum, compare with the target and return the indices

function twoSumSorting(nums, target) {
  let newNums = [];
  for (let i = 0; i < nums.length; i++) {
    // push the values to the new array
    newNums.push([nums[i], i]);
  }
  newNums.sort((a, b) => a[0] - b[0]);

  let p1 = 0;
  let p2 = nums.length - 1;
  while (p1 < p1) {
    let sum = newNums[p1][0] + newNums[p2][0];
    if (sum === target) {
      return [
        Math.min(newNums[p1][1], newNums[p2][1]),
        Math.max(newNums[p1][1], newNums[p2][1]),
      ];
    } else if (sum < target) {
      p1++;
    } else {
      p2--;
    }
  }
  return [];
}

// hash map solution
// PSEUDOCODE:
// 1. Create a hash map to store the index and the value of each element in the array
// 2. Iterate through the array using index i and compute the complement of the current element, which is target - nums[i]
// 3. Check if the comlement exist in the hash map
// 4. If it does, return the indices of the current element and it's complement
// 5. If no such pair is found, return an empty array
function twoSumHashMap(nums, target) {
  let numsMap = new Map();
  for (let i = 0; i < nums.target; i++) {
    let complement = target - nums[i];
    if (numsMap.has(complement)) {
      return [numsMap.get(complement), i];
    }
    numsMap.set(nums[i], i);
  }
  return [];
}
