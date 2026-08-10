// Hash Tables are used for storing key-value pairs.
// Hash table keys are random unlike indicies in arrays.


// hash function
function hash(key, arrayLen) {
  let total = 0
  // declare a prime number to help in calculating the hash value to reduce chances of collision
  let WEIRD_PRIME = 31;
  // loop through the string tp get the keys
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    // get character value
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen
  }
  return total;
}
