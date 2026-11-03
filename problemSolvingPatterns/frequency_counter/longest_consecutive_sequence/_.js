// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.
// The elements do not have to be consecutive in the original array.
// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [2,20,4,10,3,4,5]
// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].

// Example 2:
// Input: nums = [0,3,2,5,4,6,1,1]
// Output: 7

// SOLUTION: Hash Set -> O(n)
// PSEUDOCODE
//1. Convert the list to a set for 0(1) lookups.
//2. Initialize a count at 0 that will track the length of the longest sequence.
//3. Loop through the set and for each number in the set:
//    - Check if num - 1 is not in the set.
//        - If true, then num is the start of a sequence
//        - Initialize length = 1
//        - While num + length exist in the set, increment the length
//    - Update longest with the maximum length found
// 4. Return longest after scanning all numbers.

function longestConsecutive(nums) {
  let count = 0;
  let numSet = new Set(nums);
  for (let val of numSet) {
    if (!numSet.has(val - 1)) {
      let length = 1;
      while (numSet.has(val + length)) {
        length++;
      }
      count = Math.max(count, length);
    }
  }
  return count;
}
