// Graph
// A graph data structure is a non-linear collection of nodes (also called vertices) connected by edges that represent relationships between them.
// Unlike arrays or linked lists, a graph has no inherent ordering and typically no single root (unless you're modelling a tree or DAG).Meaning, there is no sequential order.
// Example: On a map, each city is a vertex, and each road connecting two cities is an edge. This way graph represent how cities are linked.
// Any node can connect to any number of other nodes and the connections themselves can carry meaning.

// Components of Graph Data Structure
// 1. VERTICES: Are the fundamental units of the graph. Sometimes, they are also known as vertex or nodes. Every node/vertex can be labeled or unlabelled.
// 2. EDGES: Are drawn or used to connect two nodes of the graph. It can be ordered pair of nodes in a directed graph. Edges can connect any two nodes in any possible way.
// There are no rules. Sometimes, edges are also known as arcs. Every edge can be labeled or unlabelled.

// TYPES OF GRAPHS IN DATA STRUCTURES AND ALGORITHMS
// A graph can be divides into multiple categories based on different properties such as edges, direction , connectivity and many others

// Based on Weight
// 1. Weighted Graphs: A graph where each edge has a number (weight) that represents distance, cost or time.
// 2. Unweighted Graphs: A graph where all edges are treated equally, with no extra values like distance or cost.

// Based on Edge Direction
// 3. Undirected Graph: A graph in which edges do not have any direction. That is the nodes are unordered pairs in the definition of every edge.
// 4. Directed Graph: A graph in which edge has direction. That is the nodes are ordered pairs in the definition of every edge.

// Representation of Graph Data Structure
// There are multiple ways to store a graph:
// 1. Adjacency Matrix: In this method, the graph is stored in the form of the 2D matrix where rows and columns denote vertices.
// Each entry in the matrix represents the weight of the edge between those vertices.
// matrix[i][j] = 1 if there is an edge between vertex i and vertex j
// matrix[i][j] = 0 if there is no edge
// 2. Adjacency List: The graph is represented as a collection of array lists. There is an array of pointer which points to the edges connected to that vertex.

// Difference between Tree and Graph
// Tree is a restricted type of Graph Data Structure, just with some more rules. Every tree will always be a graph but not all graphs will be trees. Linked list, Trees and Heaps
// are special cases of graphs

// Traversal Technique of Graph
// Traversal Techniques are used to visit all the vertices of a graph systematically.
// These methods help to explore the graph completely and are useful for solving many graph related problems.

// 1. Depth First Search(DFS):
// - Explores as far as possible along each branch before backtracking
// - Uses a stack or recursion

// 2. Breadth First Search(BFS):
// - Explores all neighbours of a vertex before moving to the next level
// - Uses a queue

// REAL WORLD APPLICATIONS OF GRAPHS
// 1. Social Networks: Represent users and their connections; used to find mutual friends, suggest new connections and detect communities.
// 2. Computer Networks: Model routers and data links; used for efficient routing , fault detection and network optimizations.
// 3. Compilers: Represent data dependencies and control flows; used for optimization, register allocation and code analysis.
// 4. Neural Networks: Represent neurons and synapes; used to simulate learning, brain behavior and data processing.
// 5. Transportation Networks: Represent cities and routes; used to find shortest or fastest paths and plan optimal travel routes.
// 6. Robot Path Planning: Represent states and transitions; used to compute the safest or shortest route fir autonomous movement.

// ADVANTAGES OF GRAPHS
// 1, Graphs are flexible: Unlike arrays, linked lists or trees, graphs have no restrictions and can represent any type of relationship.
// 2. Model real-world problems: Useful for pathfinding, data clustering, network analysis and machine learning
// 3. Represents items and relationships: Any set of items and their connections can be modeled as a graph
// 4. Simplfifies complex data: Graphs make complex data relationships easy to visualize and understand.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // add vertex
  // PSEUDOCODE
  // 1. Write a method called addVertex, which accepts a name of a vertex
  // 2. It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array.
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  // add an edge
  // PSEUDOCODE
  // 1. This function should accept two vertices, we call them vertex1 and vertex2.
  // 2. The function should find in the adjacency list the key of vertex1 and push vertex2 to the array.
  // 3. The function should find in the adjacency list the key of vertex2 and push vertex1 to the array.
  // 4. Do not worry about error handling/ invalid vertices
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // remove an edge
  // PSEUDOCODE
  // 1. This function should accept two vertices, we'll call them vertex1 and vertex2
  // 2. The function should reassign the key of vertex1 to be an array that does not contain vertex2
  // 3. The function should reassign the key of vertex2 to be an array that does not contain vertex1
  // 4. Do not worry about handling errors/invalid vertices.
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  // remove a vertex
  // PSEUDOCODE
  // 1. The function should accept a vertex to be removed
  // 2. The function should loop as long as there are any other vertices in the adjacency List for that vertex
  // 3. Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for the vertex
  // 4. Delete the key in the adjacancy list for that vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
