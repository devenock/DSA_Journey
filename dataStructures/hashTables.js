// HASH TABLE
// Hash Tables are used for storing key-value pairs.
// It is used to insert, look up and remove key-value pairs quickly. It operates on the hashing concept, where each key is translated by a hash function into
// distinct index in an array. The index functions as a storage location for the matching value. In simple terms, it maps the keys with the value.
// Hash table keys are random unlike indicies in arrays.

// LOAD FACTOR
// A hash table's load factor is determined by how many elements are kept there in relation to how big the table is.
// The table may be cluttered and have longer search times and collisions if the load factor is high.
// An ideal load-factor can be maintained with the use of a good hash function and proper table resizing.

// HASH FUNCTION
// A function that translates keys to array indices. The keys should be evenly distributed across the array via a decent hash function to reduce collisions and ensure
// quick look up speeds.
//

// hash function
function hash(key, arrayLen) {
  let total = 0;
  // declare a prime number to help in calculating the hash value to reduce chances of collision
  let WEIRD_PRIME = 31;
  // loop through the string to get the keys
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    // get character value
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
