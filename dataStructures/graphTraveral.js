// Two of the common Graph Traversal algorithms are:
// 1. Depth-First Search(DFS)
// - Involves going as far as possible along one path before backtracking. From the starting node,
// it visits an unvisisted neighbor, following unvisited neighbors down that path until it reaches a node with no more unexplored connections.
// -  We use stack to keep track of the path, where we expand the most recently added node.
// - This is either done explicitly with a data structure, or implicitly through the call stack in a recursive implementation.
// - This leads to two variations of DFS: Iterative DFS and Recursive DFS.
// 2. Breadth-First Search(BFS)
// - Explores a graph by visiting all nodes at the current depth before moving deeper.
// - Starting from the intital node, it visits all unvisited neighbors, then process each of those
// neighbor's invisited neighbprs in turn, gradually expanding outward from the source.
// - BFS uses a queue to track nodes to visit next, always processing the earliest added node first.
// - BFS is implmented iteratively since it relies on a queue for FIFO ordering , whereas recursion uses a stack, which followa LIFO.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // add vertex
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  // add edge
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // remove edge
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2,
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1,
    );
  }

  // remove vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjacenctVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacenctVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Graph Traversals
  // DFS Recursive PSEUDOCODE
  // 1. Create a function that accepts a starting node(vertex)
  // 2. Create a list to store the end result, to be returned at the very end
  // 3. Create an object to store visited vertices
  // 4. Create a helper function which accepts a vertex
  //    - The helper function should return early if the vertex is empty
  //    - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
  //    - Loop over all of the values in the adjacencyList for that vertex.
  //    - If any of those values have not been visited, recursively invoke the helper function with that vertex.
  // 5. Invoke the helper function with the starting vertex.
  // 6. Return the result array.
  // SOLUTION
  DFSRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList(function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
}
