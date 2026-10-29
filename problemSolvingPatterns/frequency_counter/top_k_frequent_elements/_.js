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
function topKFrequent(nums, k) {
  let numHash = {};
  for (let num of nums) {
    numHash[num] = (numHash[num] || 0) + 1;
  }
  const numHashArr = Object.entries(numHash).map(([num, freq]) => [
    freq,
    parseInt(num),
  ]);
  numHashArr.sort((a, b) => b[0] - a[0]);
  return numHashArr.slice(0, k).map((pair) => pair[1]);
}

// SIMILLAR PROBLEM
// Given an array of strings words and an integer k, return the k most frequent strings.
// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:
// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// Example 2:
// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

// SOLUTION
function topKFrequentWords(words, k) {
  const hash = {};
  for (let word of words) {
    hash[word] = (hash[word] || 0) + 1;
  }
  let hashArr = Object.entries(hash).map(([word, freq]) => [freq, word]);
  hashArr.sort((a, b) => b[0] - a[0] || a[1].localeCompare(b[1]));
  return hashArr.slice(0, k).map((pair) => pair[1]);
}
