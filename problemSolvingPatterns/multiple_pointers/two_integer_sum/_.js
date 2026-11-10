// Two Integer Sum II
// Given an array of integers numbers that is sorted in non-decreasing order.
// Return the indices(1 - indexed) of two numbers, [index1, index2], such that they add up to
// a given target number target and index1 < index2.Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
// There will always be exactly one valid solution.

// Your solution must use O(1) additional space.

// Example 1:
// Input: numbers = [1,2,3,4], target = 3
// Output: [1,2]
// Explanation:
// The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].

// SOLUTION

// BRUTE FORCE
function twoSum(numbers, target) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum = numbers[i] + numbers[j];
      if (sum == target) {
        return [i + 1, j + 1];
      }
    }
  }
  return [];
}

// OPTIMIZED SOLUTION
function twoSum(numbers, target) {
  // since the array is already sorted, we can use two pointers and binary search to solve the problem
  if (numbers.length === 0) {
    return [];
  }
  let firstPtr = 0;
  let lastPtr = numbers.length - 1;

  while (firstPtr < lastPtr) {
    let sum = numbers[firstPtr] + numbers[lastPtr];
    if (sum === target) {
      return [firstPtr + 1, lastPtr + 1];
    } else if (sum < target) {
      firstPtr++;
    } else {
      lastPtr--;
    }
  }
  return [];
}
