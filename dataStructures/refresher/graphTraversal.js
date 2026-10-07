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
  // DFSRecursive(start) {

  //   let result = []
  //   let visited = {}
  //   let currentVertex
  // }

  DFSIterative(start) {
    let result = [];
    let visited = {};
    let vertices = [start];
    visited[start] = true;
    let currentVertex;
    while (vertices.length > 0) {
      currentVertex = vertices.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          vertices.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS(start) {
    let result = [];
    let visited = {};
    let queue = [start];
    visited[start] = true;
    let currentVertex;
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
}
