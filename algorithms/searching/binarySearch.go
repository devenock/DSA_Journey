package searching

// PROBLEM:Given a sorted array of integers and an integer called target, find the element that equals the target and return its index. If the element is not found, return -1.
// ITERATIVE APPROACH
func binarySearchIterative(arr []int, target int) int {
	if len(arr) == 0 {
		return -1
	}
	l := 0
	r := len(arr) - 1
	for l <= r {
		mid := l + (r-l)/2
		if arr[mid] == target {
			return mid
		} else if arr[mid] > target {
			r = mid - 1
		} else {
			l = mid + 1
		}
	}
	return -1
}

// RECURSIVE APPROACH
