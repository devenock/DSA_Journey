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

// BRUTE FORCE: O(n^2)
func twoSum(nums []int, target int)int[]{
	for i := 0; i < len(nums); i++{
		for j := i + 1; j < len(nums); j++{
			if nums[i] + nums[j] === target{
				return []int{i, j}
			}
		}
	}
	return []int{}
}

// OPTIMIZED SOLUTION: o(n)
// HASH MAP
// PSEUDOCODE
// 1. Create an empty hash map to store the index and the value of each element in the slice
// 2. Iterate over the slice using index i and compute the complement of the current element which is target - nums[i]
// 3. Check to see if the complement already exist in the hash map
// 4. If it does, return the indices of the current element and it's complement.
// 5. If no such pair is found, return an empty slice
func twoSum(nums []int, target int)[]int{
 	newMap := make(map[int]int)
  	for i :=0; i < len(nums); i++{
   		complement := target - nums[i]
     	val, ok := newMap[complement]
      	if ok{
       		return []int{val, i}
       	}
        newMap[nums[i]] =  i
   	}
    return []int{}
}

// USING RANGE FOR LOOPING
func twoSum(nums []int, target int)[]int{
 	newMap := make(map[int]int)
  	for i, n := range nums{
   		complement := target - n
     	val, ok := newMap[complement]
      	if ok{
       		return []int{val, i}
       	}
        newMap[n] =  i
   	}
    return []int{}
}
