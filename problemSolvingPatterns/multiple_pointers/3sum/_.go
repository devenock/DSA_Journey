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

// BRUTE FORCE SOLUTION: O(n^3)
func threeSum(nums []int)[][]int{
	if len(nums) == 0 {
		return []
	}
	// initialize a set to keep track of the unique values: we initialize it with 3 since we will have a nested array of 3 ints
	mySet := map[[3]int]struct{}{}
	// sort the slice
	slices.Sort(nums)
	// loop through nums 3 times
	for i := 0; i < len(nums);i++{
		for j := i + 1; j < len(nums); j++{
			for k := j + 1; k < len(nums);k++{
				sum := nums[i] + nums[j] + nums[k]
				if sum == 0{
					mySet[[3]int{nums[i], nums[j], nums[k]}] = struct{}{}
				}
			}
		}
	}
	var result [][]int
    for triplet := range mySet {
        result = append(result, []int{triplet[0], triplet[1], triplet[2]})
    }
    return result
}

// OPTIMIZED SOLUTION: TWO POINTERS: 0(n^2), space: O(1)
func threeSum(nums []int)[][]int{
	// sort the array in ascending order
	sort.Ints(nums)
	// declare the result slice to be returned at the end
	result := [][]int{}
	// loop through the array to get the first item
	for i := 0; i < len(nums);i++{
		if nums[i] > 0{
			break
		}
		if i > 0 && nums[i] == nums[i - 1]{
			continue
		}
		l := i + 1
		r := len(nums) - 1
		for l < r{
			sum := nums[i] + nums[l] + nums[r]
			if sum > 0{
				r--
			}else if sum < 0{
				l++
			}else{
				result = append(result, []int{nums[i], nums[l], nums[r]})
				l++
				r--
				for l < r && nums[l] == nums[l - 1]{
					l++
				}
			}
		}
	}
	return result
}
