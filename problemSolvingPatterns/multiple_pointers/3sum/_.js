// 3Sum
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
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// BRUTE FORCE SOLUTION
function threeSum(nums) {
  // an edge case to always ensure we are not working with an empty array
  if (nums.length == 0) {
    return [];
  }
  // sort the array to keep duplicates closer
  nums.sort((a, b) => a - b);
  // initialize an empty set to store the unique values
  let mySet = new Set();
  // loop three times
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        // check if sum is equal to zero and add the triplets to the set
        if (sum == 0) {
          // add them to the set if so
          mySet.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        }
      }
    }
  }
  // return an array from the set
  return Array.from(mySet).map((item) => JSON.parse(item));
}

// OPTIMIZED SOLUTION: USING TWO POINTERS
function threeSum(nums) {
  // an edge case to always ensure we are not working with an empty array
  if (nums.length == 0) {
    return [];
  }
  // start by sorting the array in an ascending order
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let firstPtr = i + 1;
    let lastPtr = nums.length - 1;
    while (firstPtr < lastPtr) {
      let sum = nums[i] + nums[firstPtr] + nums[lastPtr];
      if (sum > 0) {
        lastPtr--;
      } else if (sum < 0) {
        firstPtr++;
      } else {
        res.push([nums[i] + nums[firstPtr] + nums[lastPtr]]);
        firstPtr++;
        lastPtr--;
        // skip duplicates
        while (firstPtr < lastPtr && nums[firstPtr] === nums[firstPtr - 1]) {
          firstPtr++;
        }
      }
    }
    return [];
  }
}
