// PROBLEM
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// Two strings are anagrams if they contain the same characters, with each character appearing the same number of times, regardless of order.
// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true

// Example 2:
// Input: s = "jar", t = "jam"
// Output: false

func isAnagram(s, t string) bool {
	// check string lens
	if len(s) != len(t) {
		return false
	}
	// create the maps
	sMap := make(map[rune]int)
	tMap := make(map[rune]int)

	// loop through the strings to update their maps
	for _, val := range s{
		sMap[val]++
	}

	for _, val := range t{
		tMap[val]++
	}

	for key, val := range sMap{
		if tMap[key] != val
			return false
		}
	}
	return true
}
