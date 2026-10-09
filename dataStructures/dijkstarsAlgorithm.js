class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // add vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // add an edge
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

// PRIORITY QUEUE CLASS
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // enqueue
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// DIJKSTRA'S PSEUDOCODE
// 1. This function should accept a starting and ending vertex
// 2. Create an object(we'll call it distances) and set each key to be every vertex in the adjacencyList with
// a value of infinity, except for the starting vertex which should have a value of 0.
// 3. After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue,
// except for the starting vertex, which should have a priority of 0 because that's where we begin.
// 4. Create another object called previous and set each key to be every vertex in the adjacency list with a value of null.
// 5. Start looping as long as there is anything in the priority queue
//    - dequeue a vertex from the priority queue
//    - If that vertex is the same as the ending vertex - we are done!
//    - Otherwise loop through each value in the adjacencyList as that vertex
//        - Calculate the distance to that vertex from the starting vertex
//        - If the distance is less than what is currently stored in our distances object
//              - Update the distances object with new lower distance
//              - update the previous object to contain that vertex
//              - Enqueue the vertex with the total distance from the start node
