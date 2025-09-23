// SAMPLE PROBLEMS


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
    if(stringNum1.length !== stringNum2.length) {return false;}

    // initialize the frequenc counter objects
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // populate the frequency counter objects
    for(let digit of stringNum1) {
        frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
    }
    for(let digit of stringNum2) {
        frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1;
    }

    // compare the two frequency counter objects
    for(let key in frequencyCounter1) {
        if(frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }

        if(!(key in frequencyCounter2)) {
            return false;
        }
    }

    return true;
}



// < =====================EXAMPLE 2  ===================== >

// Frequency Counter - constructNote

// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

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
    if(message.length > letters.length) {return false;}

    // initialize the frequency counter objects
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    // populate the frequency counter objects
    for(let char of message) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    for(let char of letters) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    // compare the two frequency counter objects
    for(let key in frequencyCounter1) {
        if(frequencyCounter1[key] > frequencyCounter2[key]) {
            return false;
        }

        if(!(key in frequencyCounter2)) {
            return false;
        }
    }

    return true;
}

// < =====================EXAMPLE 3  ===================== >

// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

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
    for(let arg of args) {
        frequencyCounter[arg] = (frequencyCounter[arg] || 0) + 1;
    }

    // check for duplicates
    for(let key in frequencyCounter) {
        if(frequencyCounter[key] > 1) {
            return true;
        }
    }

    return false;
}


// < =====================EXAMPLE 4  ===================== >

// Frequency Counter - findAllDuplicates

// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

//     findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
//     findAllDuplicates([4, 3, 2, 1, 0]) // []
//     findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1

// Time Complexity - O(n)

function findAllDuplicates(nums) {
    // initialize the frequency counter object
    let frequencyCounter = {};
    let duplicates = [];

    // populate the frequency counter object
    for(let num of nums) {
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    }
    
    // check for duplicates
    for(let key in frequencyCounter) {
        if(frequencyCounter[key] > 1) {
            duplicates.push(Number(key));
        }
    }
    return duplicates;
}