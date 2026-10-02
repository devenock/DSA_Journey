class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // add vertex
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
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  // remove vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjacenctVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacenctVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
