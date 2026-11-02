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

// BRUTE FORCE SOLUTION: O(n^2)
func productExceptSelf(nums []int) []int {
	n := len(nums)
	result := make([]int, n)
	for i := 0; i < n; i++ {
		product := 1
		for j := 0; j < n; j++ {
			if i == j {
				continue
			}
			product *= nums[j]
		}
		result[i] = product
	}
	return result
}

// PREFIX-SUFFIX SUM SOLUTION: O(n)
func productExceptSelf(nums []int) []int {
	n := len(nums)
	result := make([]int, n)
	prefix := 1
	for i := 0; i < n; i++ {
		result[i] = prefix
		prefix *= nums[i]
	}
	suffix := 1
	for j := n - 1; j >= 0; j-- {
		result[j] *= suffix
		suffix *= nums[j]
	}

	return result
}
