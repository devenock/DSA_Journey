// Binary Search
// DEFINITIONS:
// 1. Binary search algorithm is an efficient way of returning the index of an item in a sorted array.
// 2. Binary search algorithm is a searching algorithm that operates on a sorted or monotonic space, repeatedly dividing
// into halves to find a target value or optimal answer in logarithmic time O(log n).
// 3. Binary search is a searching algorithm that is used to find elements in sorted  data structures.
// It works by narrowing down the search range by half each time. If you have looked up a word in a physical dictionary,
// then you've already used binary search in real life.
// It uses divide and conqure behind the scenes to drive it's core implementation.

// CONDITIONS TO APPLY BINARY SEARCH
// 1. The input list(array) must be sorted.
// 2. Access to any element of the data structure should take constant time.

// ALGORITHM
// 1.Divide the search space into two halves by finding the middle index "mid".
// 2.Compare the middle of the search space with the key.
// 3.If the key is found at middle, the process is terminated.
// 4.If the key is not found at middle, choose which half will be used as the next search space.
// -> If the key is smaller than the middle, then the left side is used for next search.
// -> If the key is larger than the middle, then the right side is used for next search.
// 5.This process is continued until the key is found or the total search space is exhausted.

// BINARY SEARCH IMPLEMENTATIONS
// It can be implemented in two ways:Iterative and Recursive.

// APPLICATIONS
// 1.Searching in sorted arrays
// 2.Finding first/last occurrence or closest match in a sorted array
// 3.Database indexing — Used in B-trees and similar structures for fast data lookup.
// 4.Debugging in version control — Tools like git bisect use binary search to isolate faulty commits.
// 5.Network routing & IP lookup — Efficiently find routing entries in tables sorted by address ranges.
// 6.File systems & libraries — Fast search through sorted directories or symbol tables.
// 7.Gaming/graphics — Collision detection or ray tracing using sorted spatial data.
// 8.Machine learning tuning — Efficient hyperparameter search (e.g., learning rate, thresholds).
// 9.Optimization problems & competitive programming — Solve boundary-value challenges by narrowing search space.
// 10.Advanced data structures — Binary search trees, self-balancing BSTs, and fractional cascading rely on search logic.

// PROBLEM:Given a sorted array of integers and an integer called target, find the element that equals the target and return its index. If the element is not found, return -1.
// ITERATIVE APPROACH
function binarySearchIterative(arr, n) {
  if (arr.length == 0) {
    return -1;
  }
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] == n) {
      return mid;
    } else if (arr[mid] > n) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

// RECURSIVE APPROACH
function binarySearchRecursive(arr, l, r, target) {
  if (arr.length == 0) {
    return -1;
  }
  if (r >= l) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] == target) {
      return mid;
    }
    if (arr[mid] > target) {
      return binarySearchRecursive(arr, l, mid - 1, target);
    }
    return binarySearchRecursive(arr, l, mid + 1, target);
  }
}

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
