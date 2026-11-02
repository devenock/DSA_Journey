// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
// Each product is guaranteed to fit in a 32-bit integer.
// Follow-up: Could you solve it in
// O(n)
// O(n) time without using the division operation?

// Example 1:
// Input: nums = [1,2,4,6]
// Output: [48, 24, 12, 8]

// Example 2:
// Input: nums = [-1,0,1,2,3]
// Output: [0,-6,0,0,0]

// SOLUTION
// 1. Nested Loop: O(n^2)
function productExceptSelf(nums) {
  let n = nums.length;
  let result = new Array(n);
  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = 0; j < n; j++) {
      if (i != j) {
        product *= nums[j];
      }
    }
    result[i] = product;
  }
  return result;
}

// PREFIX-SUFFIX SUM SOLUTION: O(n)
function productExceptSelf(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let j = n - 1; j >= 0; j--) {
    result[j] *= suffix;
    suffix *= nums[j];
  }
  return result;
}
