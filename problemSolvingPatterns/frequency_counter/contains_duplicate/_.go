// PROBLEM:
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false

// NAIVE SOLUTION: Nested loop => time: O(n^2), space: O(1)
func hasDuplicate(nums []int) bool {
	if len(nums) <= 0 {
		return false
	}
	// loop through nums
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] == nums[j] {
				return true
			}
		}
	}
	return false
}

// SORTING SOLUTION: time: O(n^2), space: O(1)
func hasDuplicate(nums []int) bool {
	if len(nums) <= 0 {
		return false
	}
	sort.Ints(nums[:]) //legacy way of sorting in Go
	// OR:
	// 	slices.Sort(nums[:])
	for i := 1; i < len(nums); i++ {
		if nums[i] == nums[i-1] {
			return true
		}
	}
	return false
}

// HASH SET SOLUTION: time: O(n), space: O(n)
func hasDuplicate(nums []int) bool {
	// create a map
	numsMap := make(map[int]bool)
	// loop through the slice and compare the values with what we already have in the map
	for _, num := range nums {
		if numsMap[num] {
			return true
		}
		numsMap[num] = true
	}
	return false
}
