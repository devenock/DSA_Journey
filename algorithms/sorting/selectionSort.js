// Selection sort is simillar to bubble sort, but instead of first placing large values into
// sorted position, it places small values into sorted position.
//
// PSEUDOCODE
// 1. Store the first element as the smallest value you've seen so far.
// 2. Compare this item to the next item in the aray until you find a smaller number.
// 3. If a smaller number is found, designate that smaller number to be the new "minimum"
// and continue until the end of the array.
// 4. If the "minimum" is not the value(index) you initially began with, swap the two values.
// 5. Repeat this with the next element until the array is sorted.
//

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minVal = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minVal]) {
        minVal = j;
      }
    }
    if (i !== minVal) {
      // swap
      var temp = arr[i];
      arr[i] = arr[minVal];
      arr[minVal] = temp;
    }
  }
  return arr;
}

// EXAMPLE 2
//
// Selection Sort

// Here's some guidance for how selection sort should work:

//     Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
//     Compare this item to the next item in the array until you find a smaller number.
//     If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
//     If the "minimum" is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
//     Repeat this with the next element until the array is sorted.

// This algorithm has a O(n^2) time complexity. You can read more about them here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms

// Examples

//     selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
//     selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
//     selectionSort([1, 2, 3]); // [1, 2, 3]
//     selectionSort([]);

//     var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
//     selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

//     var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

//     function strComp(a, b) {
//       if (a < b) { return -1;}
//       else if (a > b) { return 1;}
//       return 0;
//     }

//     selectionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

//     var moarKittyData = [{
//       name: "LilBub",
//       age: 7
//     }, {
//       name: "Garfield",
//       age: 40
//     }, {
//       name: "Heathcliff",
//       age: 45
//     }, {
//       name: "Blue",
//       age: 1
//     }, {
//       name: "Grumpy",
//       age: 6
//     }];

//     function oldestToYoungest(a, b) {
//       return b.age - a.age;
//     }

//     selectionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
//

// SOLUTION
function selectionSort2(arr) {
  // loop through the array for the first time
  for (let i = 0; i < arr.length; i++) {
    // then initialize the smallest value in the array and assign it to the index of the first item
    let smallestVal = i;
    // loop for the second time and then compare
    for (let j = i + 1; j < arr.length; j++) {
      // check the values
      if (arr[j] < arr[smallestVal]) {
        smallestVal = j;
      }
    }
    // check the value of i and compare it with the current value of smallestVal
    if (i !== smallestVal) {
      // do the swapping
      let temp = arr[i];
      arr[i] = arr[smallestVal];
      arr[smallestVal] = temp;
    }
  }
  return arr;
}
