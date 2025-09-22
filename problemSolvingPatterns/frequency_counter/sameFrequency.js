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
