# LeetCode Problems: Frequency Counter & Multiple Pointers Patterns

## Frequency Counter Pattern

The frequency counter pattern uses objects or hash maps to collect values/frequencies of values. It's particularly useful for comparing data and avoiding nested loops or O(N²) operations.

### Easy Problems

- **242. Valid Anagram** - Check if two strings are anagrams
- **1207. Unique Number of Occurrences** - Check if frequency counts are unique
- **1636. Sort Array by Increasing Frequency** - Sort array by element frequency
- **884. Uncommon Words from Two Sentences** - Find words that appear once in one sentence but not the other
- **389. Find the Difference** - Find the added character between two strings
- **383. Ransom Note** - Check if ransom note can be constructed from magazine
- **2248. Intersection of Multiple Arrays** - Find common elements across arrays

### Medium Problems

- **347. Top K Frequent Elements** - Find k most frequent elements
- **451. Sort Characters By Frequency** - Sort string by character frequency
- **3016. Minimum Number of Pushes to Type Word II** - Optimize keyboard layout
- **1481. Least Number of Unique Integers after K Removals** - Remove k elements to minimize unique count
- **1930. Unique Length-3 Palindromic Subsequences** - Count unique palindromic subsequences
- **1814. Count Nice Pairs in an Array** - Count pairs with specific property
- **2260. Minimum Consecutive Cards to Pick Up** - Find minimum cards to get a pair
- **1838. Frequency of the Most Frequent Element** - Maximize frequency with k operations

### Hard Problems

- **3086. Minimum Moves to Pick K Ones** - Minimum moves to collect k ones
- **76. Minimum Window Substring** - Find minimum window containing all characters
- **3213. Construct String with Minimum Cost** - Build string with minimum cost

## Multiple Pointers Pattern

The multiple pointers pattern uses two or more pointers to traverse data structures efficiently, often reducing time complexity from O(N²) to O(N).

### Easy Problems

#### Two Sum Variations

- **167. Two Sum II - Input Array is Sorted** - Find two numbers that add up to target
- **1. Two Sum** - Classic two sum problem (can use hash map or sorting + two pointers)

#### Palindrome Problems

- **125. Valid Palindrome** - Check if string is palindrome
- **344. Reverse String** - Reverse string in-place
- **234. Palindrome Linked List** - Check if linked list is palindrome

#### Array Manipulation

- **26. Remove Duplicates from Sorted Array** - Remove duplicates in-place
- **27. Remove Element** - Remove target element in-place
- **283. Move Zeroes** - Move all zeros to end
- **977. Squares of a Sorted Array** - Return squares in sorted order

#### Linked List Operations

- **141. Linked List Cycle** - Detect cycle in linked list (Floyd's algorithm)
- **876. Middle of the Linked List** - Find middle node

### Medium Problems

#### Sum Problems

- **15. 3Sum** - Find all unique triplets that sum to zero
- **16. 3Sum Closest** - Find triplet with sum closest to target
- **18. 4Sum** - Find all unique quadruplets that sum to target
- **259. 3Sum Smaller** - Count triplets with sum less than target
- **923. 3Sum With Multiplicity** - Count triplets with specific conditions

#### Container Problems

- **11. Container With Most Water** - Find container that holds most water
- **42. Trapping Rain Water** - Calculate trapped rainwater

#### Linked List Operations

- **142. Linked List Cycle II** - Find start of cycle in linked list
- **19. Remove Nth Node From End of List** - Remove nth node from end
- **61. Rotate List** - Rotate linked list by k positions
- **143. Reorder List** - Reorder linked list in specific pattern

#### String Problems

- **5. Longest Palindromic Substring** - Find longest palindromic substring
- **647. Palindromic Substrings** - Count palindromic substrings
- **392. Is Subsequence** - Check if string is subsequence

#### Sliding Window with Two Pointers

- **75. Sort Colors** - Sort array with three distinct values
- **80. Remove Duplicates from Sorted Array II** - Allow at most two duplicates
- **209. Minimum Size Subarray Sum** - Find minimum subarray length with target sum

#### Advanced Array Problems

- **31. Next Permutation** - Find next lexicographically greater permutation
- **287. Find the Duplicate Number** - Find duplicate in array (Floyd's algorithm)
- **457. Circular Array Loop** - Detect positive cycle in circular array

### Hard Problems

#### Complex Sum Problems

- **2563. Count the Number of Fair Pairs** - Count pairs within bounds
- **1793. Maximum Score of a Good Subarray** - Find maximum score subarray

#### Advanced String Problems

- **632. Smallest Range Covering Elements from K Lists** - Find smallest range
- **76. Minimum Window Substring** - Find minimum window containing pattern

#### Linked List Advanced

- **25. Reverse Nodes in k-Group** - Reverse linked list in groups

## Pattern Recognition Tips

### When to Use Frequency Counter

- Problems asking about element counts or frequencies
- Comparing two arrays/strings for similarity
- Finding duplicates or unique elements
- Anagram detection
- Character frequency analysis

### When to Use Multiple Pointers

- Problems involving sorted arrays or linked lists
- Finding pairs, triplets, or subsets with specific properties
- Palindrome detection
- Cycle detection in linked lists
- Problems that can be optimized from O(N²) to O(N)
- When you need to compare elements at different positions

## Common Variations

### Frequency Counter Variations

1. **Basic Counting** - Simple frequency tracking
2. **Comparison** - Compare frequencies between two datasets
3. **Top K Elements** - Find most/least frequent elements
4. **Frequency Manipulation** - Modify frequencies with constraints

### Multiple Pointers Variations

1. **Opposite Direction** - Pointers move toward each other
2. **Same Direction** - Fast and slow pointers (Floyd's algorithm)
3. **Sliding Window** - Expand and contract window
4. **Multiple Arrays** - Pointers on different data structures

## Time & Space Complexity

### Frequency Counter

- **Time**: O(N) for building frequency map
- **Space**: O(K) where K is number of unique elements

### Multiple Pointers

- **Time**: O(N) for most cases, O(N log N) if sorting required
- **Space**: O(1) additional space (not counting input)

Remember: These patterns often combine with other techniques like sorting, binary search, or sliding window for more complex problems!
