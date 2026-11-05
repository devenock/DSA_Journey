// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Example 1:
// Input: s = "Was it a car or a cat I saw?"
// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:
// Input: s = "tab a cat"
// Output: false

// SOLUTION
func isPalindrome(s string) bool {
	// convert to lowercase
	lowerStr := strings.ToLower(s)
	// get the regex library
	reg := regexp.MustCompile(`[^a-z0-9]`)
	// use it to remove spaces and special characters from the string
	clean := regexp.ReplaceAllString(lowerStr, "")
	// make an array from the string
	cleanArr := []rune(clean)

	// check length of the new array and return true if zero
	if len(cleanArr) == 0 {
		return true
	}

	// initialize the pointers
	leftPointer := 0
	rightPointer := len(cleanArr) - 1

	// loop(Go's while loop)
	for leftPointer < rightPointer {
		if cleanArr[leftPointer] != cleanArr[rightPinter] {
			return false
		} else {
			leftPointer++
			rightPointer--
		}
	}
	return true
}
