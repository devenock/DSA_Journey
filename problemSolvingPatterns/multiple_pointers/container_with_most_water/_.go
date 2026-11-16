// Container With Most Water
// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

// SOLUTION
func maxArea(heights []int) int {
	l := 0
	r := len(heights) - 1
	res := 0
	for l < r {
		width := r - l
		length := min(heights[l], heights[r])
		area := width * length
		res = max(res, area)
		if heights[l] <= heights[r] {
			l++
		} else {
			r--
		}
	}
	return res
}
