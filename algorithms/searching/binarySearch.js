// 1. Given a positive integer n, find its square root. If n is not a perfect square, then return floor of √n.
// SOLUTION
function squareRoot(n) {
  let low = 0;
  let high = n;
  let mid = Math.floor((low + high) / 2);
  let res = 1;

  while (low <= high) {
    if (mid * mid <= n) {
      res = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return res;
}

// 2. Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
