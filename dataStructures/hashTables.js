// HASH TABLE(IMPLEMENTS AN ASSOCIATIVE ARRAY - MAP)
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

// CHOOSING A HASH FUNCTION
// Selecting a descent hash function is based on the properties of the keys and the intended functionality of the hash table.
// Using a function that evenly distributes the keys and reduces collisions is crucial.

// Criteria based in which a hash function is chosen:
// 1. To ensure that the number of collisions is kept to a minimum, a good hash function should distribute the keys throughout the hash table in a uniform manner.
// This means that for all pairing keys, the likelihood of two keys hashing to the same position in the table should rather be constant.
// 2. To enable speedy hashing and key retrieval, the hash function should be computationally efficient.
// 3. It ought to be challenging to deduce the key from its hash value. As a result, attempts to guess the key using the hash function value are less likely to succeed.
// 4. A hash function should be flexible enough to adjust as the data being hashed changes. For instance, the hash function needs to continue to perform properly if
// the keys eing hashed change in size or formart.

// COLISION RESOLUTION TECHNIQUES
// Collision happens when two or more keys point to the same array index. Chaining, open addression and double hashing are a few techniques for resolving collisions.
// 1. Open addressing: Collisions handled by looking for the following empty space in the table. If the first slot is already taken, the hash function is applied
// to the sebsequent slots untill one is left empty.(double hashing, linear probing and quadratic probing)
// 2. Separate Chaining: In separate chaining, a linked list of objects that hash to each slot in the hash table is present. Two keys included in the linkedlist if they hash to the same slot.
// 3. Robin Hood Hashing: To reduce the length of the chain, collisions in Robin Hood hashing are addressed by switching off keys. The algorithm compares the distance between
// the slot and the occupied slot of the two keys if a new key hashes to an already-occupied slot.

// APPLICATIONS OF HASH TABLE
// 1. Hash tables are frequently used for indexing and searching massive volume of data. A search engine might use a hash table to store the web pages that it has indexed.
// 2. Data is usually cached in memory via hash tables, enabling rapid access to frequently used information.
// 3. Hash functions are frequently used in cryptography to create digital signatures. validate data and guarantee data integrity.
// 4. Hash tables can be used for implementing databases indexes, enabling fast access to data based on key values.
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
