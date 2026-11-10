// Two Integer Sum II
// Given an array of integers numbers that is sorted in non-decreasing order.
// Return the indices(1 - indexed) of two numbers, [index1, index2], such that they add up to
// a given target number target and index1 < index2.Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
// There will always be exactly one valid solution.

// Your solution must use O(1) additional space.

// Example 1:
// Input: numbers = [1,2,3,4], target = 3
// Output: [1,2]
// Explanation:
// The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].

// BRUTE FORCE SOLUTION
func twoSum(numbers []int, target int) []int {
	sum := 0
	if len(numbers) == 0 {
		return []int{}
	}
	for i := 0; i < len(numbers); i++ {
		for j := i + 1; j < len(numbers); j++ {
			sum = numbers[i] + numbers[j]
			if sum == target {
				return []int{i + 1, j + 1}
			}
		}
	}
	return []int{}
}

// OPTIMIZED SOLUTION
func twoSum(numbers []int, target int) []int {
	if len(numbers) == 0 {
		return []int{}
	}
	firstPtr := 0
	lastPt := len(numbers) - 1

	for firstPtr < lastPtr {
		sum := numbers[firstPtr] + numbers[lastPtr]
		if sum == target {
			return []int{firstPtr + 1, lastPtr + 1}
		} else if sum < target {
			firstPtr++
		} else {
			lastPtr--
		}
	}
	return []int{}
}
