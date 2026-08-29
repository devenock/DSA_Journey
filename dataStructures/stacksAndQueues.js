// This is a linear data structure that follows a particular order in which the operations are performed.
// The order is LIFO(Last In First Out) which implies that the element that is inserted last, comes out first.
// It behaves like a stack of plates where the last plate added is the first one to be removed.
// It means both insertion and deletion operations happen at one end only.

// REAL-WORLD EXAMPLES OF LIFO
//  Stack of plates: The last plate placed on top is the first one you pick up
// Stack of books: Books are added and removed from the top, so the last book placed is the first one taken.

// Basic Terminologies of Stack
// 1. Top: The position of the most recently inserted element. Insertions(push) and deletions(pop) ae always performed at the top
// 2. Size: Refers to the current number of elements present in the stack.

// Types of Stack

// 1. Fixed Size Stack

// - Has a predefined capacity
// - Once it becomes fyll, no more elements can be added(this causes overflow)
// - If the stack is empty and we try to remove an element, it causes underflow
// - Typically implemented using a static array

// 2. Dynamic Size Stack

// - Can grow and shrink automatically as needed
// - If stack is full, its capacity expands to allow more elements
// - As elements are removed, memory usage can shrink as well
// - Can be implemented using:
// -> Linked List: grows and shrink naturally
// -> Dynamic Array: (like a vector in C++ or ArrayList in Java) - resizes automatically

// Common Operations In Stack
// 1. push(): to insert an element into the stack
// 2. pop(): to remove an element from the stack
// 3. top(): returns the top element of the stack
// 4. isEmpty(): returns true if stack is empty else false
// 5. size(): returns the size of the stack

// Applications of Stack
// With insertion and deletion happening on the same end, there are interesting problems that we can solve using stack.

// 1. Function Calls: Stacks manager the "active" functions in a program. When a function is called, it's execution state is pushed on the stack
// and when it finishes, it is popped out to return control to the caller.

// 2. Recursion: Since recursion is essentially a function calling itself, the stack stores a "snapshot" of each call(including local variables)
// so the program doesn't lose it's place.

// 3. Expression Evaluation: Stacks are used by compliers and calculators to handle the order of operations without needing complex parentheses

// 4. Syntax Parsing: Stacks are perfect for "balancing" symbols. They ensure that every opening bracket has a corresponding closing bracket in the correct order.

// 5. Memory Management:The "Stack" is a specific region of RAM used for automatic variable allocation. It is incredibly fast because it only allocates and deallocates
// memory in a strict Last-In, First-Out (LIFO) order.

// Advantages
// 1. Time and Momory Efficiency: Push and pop operations on a stack can be performed in constant time - 0(1), enabling efficient data access, they are memory-efficient because
// they only store pushed elements , compared to other data structures.
// 2. Last-In, First-Out(LIFO): This bahavior is useful in scenarios like function calls and expression evaluation.

// Disadvantages
// 1. Limited Access: Elements in a stack can only be accessed from the top  which makes it difficult to retrieve or modify elements in the middle.
// 2. Potential for overflow: Pushing more elements onto a stack than it can hold results in an overflow error, leading to data loss.
