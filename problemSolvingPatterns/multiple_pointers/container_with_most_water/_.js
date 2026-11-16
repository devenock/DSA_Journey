// Container With Most Water
// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

// SOLUTION
function maxArea(heights) {
  // initialize the pointers
  let l = 0;
  let r = heights.length - 1;
  // initialize the result that is to be returned at the end
  let result = 0;
  // set the looping condition
  while (l < r) {
    // get the width from the two pointers
    let width = right - left;
    // get the minimum height possible since that is where the water level will reach
    let height = Math.min(heights[l], heights[r]);
    // calculate the area based on the width and the height
    let area = width * height;
    // update the result with the new value of the area
    result = Math.max(result, area);
    // check for getting the right height before calculating
    if (heights[l] <= heights[r]) {
      left++;
    } else {
      r--;
    }
  }
  return result;
}
