// TRAPPING RAIN WATER
// You are given an array of non - negative integers height which represent an elevation map.
// Each value height[i] represents the height of a bar, which has a width of 1.
// Return the total amount of water that can be trapped between the bars.

// PSEUDOCODE
// Set two pointers:
// l at the start
// r at the end
// Track leftMax and rightMax as the tallest walls seen.
// While l < r:
// If leftMax < rightMax:
// Move l right.
// Update leftMax.
// Add leftMax - height[l] to the result.
// Else:
// Move r left.
// Update rightMax.
// Add rightMax - height[r] to the result.
// Return the total trapped water.

// SOLUTION
