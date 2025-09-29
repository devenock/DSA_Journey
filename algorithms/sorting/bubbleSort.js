// This is a sorting algorithm where the largest values bubbles up to the top!
// It involves comparing the items and then swaping based on the value.
// As we loop through the items, we compare the current item with the next one and if the next item is smaller than the current item, the we do the swapping.
// Note the before we sort, we must swap

//EXAMPLE

function bubbleSort(arr) {
  // define a variable to help ypu break out of the loop when there is no more swapping
  let noSwaps;
  // start looping from the end of array towards the beginning
  for (let i = arr.length; i > 0; i--) {
    // set the noSwaps variable to true when we start looping
    noSwaps = true;
    // then loop from the beginning to end only for the unsorted array
    for (let j = 0; j < i - 1; j++) {
      // compare the first item in array to the next item
      if (arr[j] > arr[j + 1]) {
        // define a variable to hold the value of the first item in the array
        let temp = arr[j];
        // if the condition in the if statement block is true, then swap the items
        arr[j] = arr[j + 1];
        // assign the new value to the temp vcariable
        arr[j + 1] = temp;
        // set noSwaps variable to false when we nolonger have anything to swap, meaning the array is already sorted.
        noSwaps = false;
      }
    }
  }
  // always return the sorted array
  return arr;
}

// The time complexity of a bubble sort algorithm is 0(n^2)
// You should always try to avoid bubble sort unless you are sure that your data is almost sorted.
