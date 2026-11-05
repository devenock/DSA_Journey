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
function isPalindrome(s) {
  // convert the string to lowercase and remove the special characters
  let newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  // convert to array
  let newStrArr = newStr.split("");

  if (newStrArr.length == 0) {
    return true;
  }

  // declare the pointers
  let leftPointer = 0;
  let rightPointer = newStrArr.length - 1;

  while (leftPointer < rightPointer) {
    if (newStrArr[leftPointer] !== newStrArr[rightPointer]) {
      return false;
    } else {
      leftPointer++;
      rightPointer--;
    }
  }
  return true;
}
