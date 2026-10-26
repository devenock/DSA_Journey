// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"], ["act", "cat"], ["stop", "pots", "tops"]]

// Example 2:
// Input: strs = ["x"]
// Output: [["x"]]

// Example 3:
// Input: strs = [""]
// Output: [[""]]

// SOLUTION
// PSEUDOCODE
// 1. Create a hash map where each key is a 26-length tuple representing character frequencies,
// and each value is a list of strings belonging to that anagram group.
// 2.For each string in the input:
//   - Initialize a count array of size 26 with all zeros.
//   - For each character c in the string, increment the count at the corresponding index.
//   - Convert the count array to a tuple and use it as the key.
//   - Append the string to the list associated with this key.
//
// 3. After processing all strings, return all the lists stored in the hash map.
func groupAnagrams(strs []string) [][]string {
	// create an empty hash map
	res := make(map[[26]int][]string)
	for _, val := range strs {
		var count [26]int
		for _, c := range val {
			count[c-'a']++
		}
		res[count] = append(res[count], val)
	}
	var result [][]string
	for _, group := range res {
		result = append(result, group)
	}
	return result
}
