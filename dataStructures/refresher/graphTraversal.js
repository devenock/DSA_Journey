class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // methods
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  // add edge
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // remove edge
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v != v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v != v1);
  }

  // remove vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacenctVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacenctVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Traversals
  DFSIterative(start) {
    let stack = [start];
    let result = [];
    let visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length > 0) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS(start) {
    let queue = [start];
    let result = [];
    let visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length > 0) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  // DFSIterative2(start) {
  //   // declare the stack storage as an array, inititalized with the start
  //   let stack = [start];
  //   // initialize the result array to be returned
  //   let result = [];
  //   // declare the hash map for storing visited nodes
  //   let visited = {};
  //   // mark the start node as visited
  //   visited[start] = true;
  //   let currentVertex;
  //   while (stack.length > 0) {
  //     // assing the current vertex to what is in the stack array
  //     currentVertex = stack.pop();
  //     // push the current vertex to the result array
  //     result.push(currentVertex);
  //     // loop through the adjacency list as you visit each node
  //     this.adjacencyList[currentVertex].forEach((neighbor) => {
  //       if (!visited[neighbor]) {
  //         visited[neighbor] = true;
  //         stack.push(neighbor);
  //       }
  //     });
  //   }
  //   return result;
  // }

  // BFS2(start) {
  //   // declare the stack storage as an array, inititalized with the start
  //   let queue = [start];
  //   // initialize the result array to be returned
  //   let result = [];
  //   // declare the hash map for storing visited nodes
  //   let visited = {};
  //   // mark the start node as visited
  //   visited[start] = true;
  //   let currentVertex;
  //   while (queue.length > 0) {
  //     // assing the current vertex to what is in the stack array
  //     currentVertex = queue.shift();
  //     // push the current vertex to the result array
  //     result.push(currentVertex);
  //     // loop through the adjacency list as you visit each node
  //     this.adjacencyList[currentVertex].forEach((neighbor) => {
  //       if (!visited[neighbor]) {
  //         visited[neighbor] = true;
  //         stack.push(neighbor);
  //       }
  //     });
  //   }
  //   return result;
  // }
}
