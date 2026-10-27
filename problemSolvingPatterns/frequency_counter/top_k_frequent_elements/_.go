// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.
// You may return the output in any order.

// Example 1:
// Input: nums = [1,2,2,3,3,3], k = 2
// Output: [2, 3]

// Example 2:
// Input: nums = [7,7], k = 1
// Output: [7]
// PSEUDOCODE
// 1.Create a hash map to store the frequency of each number.
// 2.Build a list of [frequency, number] pairs from the map.
// 3.Sort this list in ascending order based on frequency.
// 4.Create an empty result list.
// 5.Repeatedly pop from the end of the sorted list (highest frequency) and append the number to the result.
// 6.Stop when the result contains k elements.
// 7.Return the result list.

func topKFrequent(nums []int, k int) []int {
	numsHash := make(map[int]int)
	for _, val := range nums {
		numsHash[val]++
	}
	numsHashArr := make([][2]int, 0, len(numsHash))
	for i, val := range numsHash {
		numsHashArr = append(numsHashArr, [2]int{i, val})
	}
	sort.Slice(numsHashArr, func(i, j int) bool {
		return numsHashArr[i][0] > numsHashArr[j][0]
	})
	res := make([]int, k)
	for i := 0; i < k; i++ {
		res[i] = numsHashArr[i][1]
	}
	return res
}
