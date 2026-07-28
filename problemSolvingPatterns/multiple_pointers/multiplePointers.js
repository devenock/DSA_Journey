// <================ Multiple Pointers Pattern (Two Pointers Pattern) ================>

// This pattern uses multiple pointers to create a more efficient algorithm.
// The pointers can be moving towards each other or in the same direction to reduce time complexity
// from 0(n^2) to 0(n).
// This pattern can often be applied to solve problems with minimal space complexity as well.
// WHEN TO USE: Problems involving arrays or linked list where you need to find pairs, check palindromes, or work with sorted data.

// SET OF PROBLEMS ON LEETCODE
// 1. Two Sum II(Easy)
// Given a 1-indexed array of integer numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number. Let these two numbers be
// numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

// Example 1:
Input: ((numbers = [2, 7, 11, 15]), (target = 9));
Output: [1, 2];
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
Input: ((numbers = [2, 3, 4]), (target = 6));
Output: [1, 3];
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
Input: ((numbers = [-1, 0]), (target = -1));
Output: [1, 2];
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// SOLUTION
function twoSumII(nums, target) {
  // brute force => 0(n^2)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  //
  // optimized solution => 0(n)
  let firstPointer = 0;
  let lastPointer = nums.length - 1;

  while (firstPointer < lastPointer) {
    let sum = nums[firstPointer] + nums[lastPointer];
    if (sum === target) {
      return [firstPointer, lastPointer];
    } else if (sum > target) {
      lastPointer--;
    } else {
      firstPointer++;
    }
  }
}

// 2. Valid Palindrome(Easy)
// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).
// Example 1:
// Input: s = "Was it a car or a cat I saw?"
// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.
// Example 2:
// Input: s = "tab a cat"
// Output: false
// SOLUTION
function isPalindrome(s) {
  // first change the string to lowercase, then remove the spaces and the special x-ters from the string(trim it)
  let newStr = s.toLowerCase().replace(/[^a-z0-9]/g,"")
  // form an array from the string
  let sArr = newStr.split("")

  // check if length is 0 and return true because an empty string is a valid palindrome
  if (sArr.length === 0) {
    return true;
  }
  // define the pointers
  let left = 0
  let right = sArr.length - 1
  // set the loop
  while (left < right) {
    if (sArr[left] !== sArr[right]) {
      return false
    } else {
      left++
      right--
    }
  }

  return true;
}
// 3. 3Sum(Medium)
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Example 2:
// Input: nums = [0,1,1]i
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
// SOLUTION
function threeSum(nums) {
  // sort the array first
  nums.sort((a, b) => a - b)
  let result = []
  // loop through the array first
  for (let i = 0; i < nums.length; i++){
    // check for a posibility
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // define the pointers
    let left = i + 1
    let right = nums.length - 1
    // set the loop condition
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        result.push([nums[i], nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left] === nums[left - right]) {
          left++
        }
      }
    }
  }

  return result;
}

// 4. Container With Most Water(Medium)
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
//    Example 1:
//   Input: height = [1,8,6,2,5,4,8,3,7]
//   Output: 49
//   Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case,
//   the max area of water (blue section) the container can contain is 49.
//   Example 2:

//   Input: height = [1,1]
//   Output: 1
// SOLUTION:
function containerWithMostWater(height) {
  // first check the array length
  if (height.length === 0) {
    return -1;
  }
  // define the pointers
  let left = 0
  let right = height.length - 1
  let result = 0
  while (left < right) {
    let width = right - left
     let height = Math.min(height[left], height[right])
    let area = width * height;
    result = Math.max(result, area)
    if (height[left] <= height[right]) {
      left++
    } else {
      right--
    }
  }

  return result;
}

// 5. Trapping Rain Water(Hard)

// < =====================EXAMPLE 1  ===================== >

// averagePair

// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Examples:

//     averagePair([1,2,3],2.5) // true
//     averagePair([1,3,3,5,6,7,10,12,19],8) // true
//     averagePair([-1,0,3,4,5,6],4.1) // false
//     averagePair([],4) // false

// Constraints:

// Time: O(N)

// Space: O(1)

function averagePair(arr, targetAvg) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

// < =====================EXAMPLE 2  ===================== >

// Frequency Counter / Multiple Pointers - isSubsequence

// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

// Examples:

//     isSubsequence('hello', 'hello world') // true
//     isSubsequence('sing', 'sting') // true
//     isSubsequence('abc', 'abracadabra') // true
//     isSubsequence('abc', 'acb') // false (order matters)

// Constraints:

// Time - O(N + M)

// Space - O(1)

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}

// < =====================EXAMPLE 3  ===================== >

// Multiple Pointers - findPair

// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

//     findPair([6,1,4,10,2,4], 2) // true
//     findPair([8,6,2,4,1,0,2,5,13],1) // true
//     findPair([4,-2,3,10],-6) // true
//     findPair([6,1,4,10,2,4], 22) // false
//     findPair([], 0) // false
//     findPair([5,5], 0) // true
//     findPair([-4,4], -8) // true
//     findPair([-4,4], 8) // true
//     findPair([1,3,4,6],-2) // true
//     findPair([0,1,3,4,6],-2) // true
//     findPair([1,2,3], 0) // false

// Part 1 - solve this with the following requirements:

// Time Complexity Requirement - O(n)

// Space Complexity Requirement - O(n)

// Part 2 - solve this with the following requirements:

// Time Complexity Requirement - O(n log n)

// Space Complexity Requirement - O(1)

function findPair(arr, n) {
  if (arr.length < 2) return false;

  // Part 1 - Frequency Counter Pattern
  let frequencyCounter = {};
  for (let num of arr) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }
  for (let num of arr) {
    if (frequencyCounter[num + n] || (n === 0 && frequencyCounter[num] > 1)) {
      return true;
    }
  }
  return false;

  // Part 2 - Multiple Pointers Pattern
  // arr.sort((a, b) => a - b);
  // let left = 0;
  // let right = 1;

  // while(right < arr.length) {
  //     let diff = arr[right] - arr[left];
  //     if(diff === n && left !== right) {
  //         return true;
  //     } else if(diff < n) {
  //         right++;
  //     } else {
  //         left++;
  //     }
  // }
  // return false;
}
