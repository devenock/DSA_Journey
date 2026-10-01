// A graph stores data in vertices which are connected via edges to indicate the relationships.
// There are different types of graph data structure including directed and undirected graph, wighted and unweighted.
// We also have two ways of implementing graph data structure: adjacency matrix(2D matrix) and adjacency list(an array)

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // methods
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
