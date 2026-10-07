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

  // DFS Iterative PSEUDOCODE
  // 1. The function should accept a starting node.
  // 2. Create a stack to help use keep track of vertices (use list/array)
  // 3. Create a list to store the end result, to be returned at the very end
  // 4. Create an object to store visited nodes
  // 5. Add the starting vertex to the stack and mark it visited
  // 6. While the stack has something in it:
  //   - Pop the next vertex from the stack
  //   - If that vertex hasn't been visited yet:
  //        - Mark it as visited
  //        - Add it to the result list
  //        - Push all of its neighbors into the stack
  //   - Return the result array
  // SOLUTION
  DFSIterative(start) {
    const vertices = [];
    const result = [];
    const visited = {};
    vertices.push(start);
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

  // BFS PSEUDOCODE
  // 1. This function should accept a starting vertex.
  // 2. Create a queue(you can use an array) and place the starting vertex in it
  // 3. Create an array to store the nodes visited
  // 4. Create an object to store visited nodes
  // 5. Mark the starting vertex as visited
  // 6. Loop as long as there is anything in the queue
  // 7. Remove the first vertex from the queue and push it into the array that stores nodes visited.
  // 8. Loop over each vertex in the adjacency list for the vertex you are visiting
  // 9. If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
  // 10. Once you have finished looping, return the array of visited nodes
  // SOLUTION
  BreadthFirstSearch(start) {
    const graphQueue = [start];
    const result = [];
    const visitedObj = {};
    visitedObj[start] = true;
    let currentVertex;
    while (graphQueue.length > 0) {
      currentVertex = graphQueue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visitedObj[neighbor]) {
          visitedObj[neighbor] = true;
          graphQueue.push(neighbor);
        }
      });
    }
    return result;
  }
}
