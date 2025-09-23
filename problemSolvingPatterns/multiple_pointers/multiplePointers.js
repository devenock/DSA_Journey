// <================ Multiple Pointers Pattern ================>

// This pattern uses multiple pointers to create a more efficient algorithm. 
// This pattern can often be applied to solve problems with minimal space complexity as well.

// < =====================EXAMPLE 1  ===================== >

// averagePair

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Examples:

//     averagePair([1,2,3],2.5) // true
//     averagePair([1,3,3,5,6,7,10,12,19],8) // true
//     averagePair([-1,0,3,4,5,6],4.1) // false
//     averagePair([],4) // false

// Constraints:

// Time: O(N)

// Space: O(1)

function averagePair(arr, targetAvg) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let avg = (arr[left] + arr[right]) / 2;
        if(avg === targetAvg) {
            return true;
        } else if(avg < targetAvg) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}



// < =====================EXAMPLE 2  ===================== >

// Frequency Counter / Multiple Pointers - isSubsequence

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

//     isSubsequence('hello', 'hello world') // true
//     isSubsequence('sing', 'sting') // true
//     isSubsequence('abc', 'abracadabra') // true
//     isSubsequence('abc', 'acb') // false (order matters)

// Constraints:

// Time - O(N + M)

// Space - O(1)

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    if(!str1) return true;

    while(j < str2.length) {
        if(str2[j] === str1[i]) {
            i++;
        }
        if(i === str1.length) {
            return true;
        }
        j++;
    }
    return false;
}


// < =====================EXAMPLE 3  ===================== >

// Multiple Pointers - findPair

// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

//     findPair([6,1,4,10,2,4], 2) // true
//     findPair([8,6,2,4,1,0,2,5,13],1) // true
//     findPair([4,-2,3,10],-6) // true
//     findPair([6,1,4,10,2,4], 22) // false
//     findPair([], 0) // false
//     findPair([5,5], 0) // true
//     findPair([-4,4], -8) // true
//     findPair([-4,4], 8) // true
//     findPair([1,3,4,6],-2) // true
//     findPair([0,1,3,4,6],-2) // true
//     findPair([1,2,3], 0) // false

// Part 1 - solve this with the following requirements:

// Time Complexity Requirement - O(n)

// Space Complexity Requirement - O(n)

// Part 2 - solve this with the following requirements:

// Time Complexity Requirement - O(n log n)

// Space Complexity Requirement - O(1)

function findPair(arr, n) {
    if(arr.length < 2) return false;
    
    // Part 1 - Frequency Counter Pattern
    let frequencyCounter = {};
    for(let num of arr) {
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    }   
    for(let num of arr) {
        if(frequencyCounter[num + n] || (n === 0 && frequencyCounter[num] > 1)) {
            return true;
        }
    }
    return false;

    // Part 2 - Multiple Pointers Pattern             
    // arr.sort((a, b) => a - b);
    // let left = 0;
    // let right = 1;

    // while(right < arr.length) {
    //     let diff = arr[right] - arr[left];
    //     if(diff === n && left !== right) {
    //         return true;
    //     } else if(diff < n) {
    //         right++;
    //     } else {
    //         left++;
    //     }
    // }
    // return false;
}
