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

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at the end
    let smallest;
    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // we are done
        // build up path to return at the end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}
