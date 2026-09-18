class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // insert method
  insert(element) {
    // first push the element to the values array
    this.values.push(element);
    // get the index of the element in the array
    let elemIndex = this.values.length - 1;
    // get the value of the element based on the index
    let elemVal = this.values[elemIndex];
    // set a while loop
    while (elemIndex > 0) {
      // get the parent index
      let parentIndex = Math.floor((elemIndex - 1) / 2);
      // get the parent value
      let parentVal = this.values[parentIndex];
      // compare the values for swapping
      if (elemVal <= parent) break;
      // else swap
      this.values[parentIndex] = elemVal;
      this.values[elemIndex] = parentVal;
      parentIndex = elemIndex;
    }
  }
}
