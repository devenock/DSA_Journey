// Insertion sort works by building up the sort by gradually creating a larger left half which is always sorted.
// PSEUDOCODE
// 1. Start by picking the second element in the array
// 2. Now compare the second element with the one before it and swap if necessary.
// 3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion
// (i.e. the left side) to place the element in the correct place.
// 4. Repeat until the array is sorted.
//

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let tempVal = arr[j];
      if (tempVal < arr[i]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
}
