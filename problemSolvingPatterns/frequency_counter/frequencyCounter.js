// FREQUENCY COUNTER PATTERN
// It is mainly used when comparing pieces of data. When comparing values of multiple inputs.
// This pattern uses objects and sets to collect values from the inputs.
//  it is always used to avoid need for a Nested loop which results to 0(n^2) operations in Arrays and Strings.

// SAMPLE PROBLEMS

// < ===================== EXAMPLE 0 ===================== >
// Frequency Counter - same
// Write a function called **same**, which accepts two arrays. The function should return true if every value in the array has it's corresponding
// value squared in the second array. The frequency of the values must be the same.

// BRUTE FORCE SOLUTION
function same(arr1, arr2) {
  // check to ensure they are of the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop through the first array
  for (let i = 0; i < arr1.length; i++) {
    // define the index of arr1^2 in arr2
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // check if they truly exist
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// OPTIMIZED SOLUTION
function same2(arr1, arr2) {
  // compare array lengths
  if (arr1.length !== arr2.length) {
    return false;
  }
  // define the frequencies
  let frequency1 = {};
  let frequency2 = {};

  // loop through the first array
  for (let val of arr1) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }

  // loop through the second array
  for (let val of arr2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }

  // loop through the first frquency
  for (let key in frequency1) {
    if (!(key ** 2 in frequency2)) {
      return false;
    }
  }
  return true;
}

// < =====================EXAMPLE 1 ===================== >
// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

//     sameFrequency(182,281) // true
//     sameFrequency(34,14) // false
//     sameFrequency(3589578, 5879385) // true
//     sameFrequency(22,222) // false

// < =====================SOLUTION 1 ===================== >
function sameFrequency(num1, num2) {
  // convert the integers to strings
  let stringNum1 = num1.toString();
  let stringNum2 = num2.toString();

  // check if the strings have the same length
  if (stringNum1.length !== stringNum2.length) {
    return false;
  }

  // initialize the frequenc counter objects
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // populate the frequency counter objects
  for (let digit of stringNum1) {
    frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
  }
  for (let digit of stringNum2) {
    frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1;
  }

  // compare the two frequency counter objects
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }

    if (!(key in frequencyCounter2)) {
      return false;
    }
  }

  return true;
}

// < =====================EXAMPLE 2  ===================== >

// Frequency Counter - constructNote

// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// Examples:

//     constructNote('aa', 'abc') // false
//     constructNote('abc', 'dcba') // true
//     constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(message, letters) {
  // edge case: if message is longer than letters, return false
  if (message.length > letters.length) {
    return false;
  }

  // initialize the frequency counter objects
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // populate the frequency counter objects
  for (let char of message) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of letters) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  // compare the two frequency counter objects
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] > frequencyCounter2[key]) {
      return false;
    }

    if (!(key in frequencyCounter2)) {
      return false;
    }
  }

  return true;
}

// < =====================EXAMPLE 3  ===================== >

// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

//     areThereDuplicates(1, 2, 3) // false
//     areThereDuplicates(1, 2, 2) // true
//     areThereDuplicates('a', 'b', 'c', 'a') // true

// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicates(...args) {
  // initialize the frequency counter object
  let frequencyCounter = {};

  // populate the frequency counter object
  for (let arg of args) {
    frequencyCounter[arg] = (frequencyCounter[arg] || 0) + 1;
  }

  // check for duplicates
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }

  return false;
}

// < =====================EXAMPLE 4  ===================== >

// Frequency Counter - findAllDuplicates

// Given an array of positive integers, some elements appear twice and others appear once.
// Find all the elements that appear twice in this array. Note that you can return the elements in any order.

//     findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
//     findAllDuplicates([4, 3, 2, 1, 0]) // []
//     findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1

// Time Complexity - O(n)

function findAllDuplicates(nums) {
  // initialize the frequency counter object
  let frequencyCounter = {};
  let duplicates = [];

  // populate the frequency counter object
  for (let num of nums) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }

  // check for duplicates
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      duplicates.push(Number(key));
    }
  }
  return duplicates;
}

// <===============Example 5=============>
// Anagram challenge

// Frequency Counter - validAnagram

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true

// Note: You may assume the string contains only lowercase alphabets.
// Time Complexity - O(n)

// BRUTE FORCE
function bruteValidAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // loop through the strings to check if they have similar items
  for (let i = 0; i < str1.length; i++) {
    let correctIndex = str2.indexOf(str1[i]);
    if (correctIndex === -1) {
      return false;
    }
    str2.splice(correctIndex, 1);
  }
  return true;
}

// OPTIMIZED SOLUTION
function optimizedValidAnagram(string1, string2) {
  // compare their length
  if (string1.length !== string2.length) {
    return false;
  }

  // define the hash maps for the frequencies
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // loop through the first string and assign its values to the frequency
  for (let val of string1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // loop through the second string and assign its values to the frequency
  for (let val of string2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[key] > frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

// Unique Number of Occurrences
// Given an array of integers **arr**, return **true** if the number of occurrences of each value in the array is **unique** or **false** otherwise.
// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:
// Input: arr = [1,2]
// Output: false
// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
// Constraints:
//     1 <= arr.length <= 1000
//     -1000 <= arr[i] <= 1000

// BRUTE FORCE
function numberOfOccurances(arr) {
  return arr.length === 0 ? false : true;
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        return false;
      }
    }
  }
}
