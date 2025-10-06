// WHEN TO USE: Problems involving subarrays/substrings with specific conditions, finding optimal windows.
// KEY INSIGHT: Maintain a window and expand/ contract t based on conditions to avoid recalculating.
//
// LEETCODE PROBLEM SET
// 1. Maximum Average Subarray I (Easy - #643)
// 2. Best Time to Buy and Sell Stock (Easy - #121)
// 3. Longest Substring Without Repeating Characters (Medium - #3)
// 4. Minimum Window Substring (Medium - #76)
// 5. Sliding Window Maximum (Hard - #239)

// maxSubarraySum

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

//     maxSubarraySum([100,200,300,400], 2) // 700
//     maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
//     maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
//     maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
//     maxSubarraySum([2,3], 3) // null

// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  // find the initial window sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // slide the window across the array
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
