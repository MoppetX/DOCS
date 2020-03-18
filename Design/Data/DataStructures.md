

## Data structures

### Stack

array : push, pop, length, indexOf... 

- fixed size
- inefficient Insertions and deletions
- random access (inefficient indexing)
- may result in much memory waste
- sequential access is faster (elements in contiguous memory locations)

### Set

like an array with no duplicates
.size: a property, not a function. 
.delete(): removes an item
.values(): instead of an array, will return an iterator

### Queue

similar to stack, but instead of 'first in, last out', a queue is 'first in, first out'
.dequeue(): like shift(), removes an item from the front

#### Priority Queue

elements can have a priority and get sorted accordingly. If all priorities are the same, then this behaves like a regular queue. Otherwise, elements with higher priority (the lower the number, the higher) get put at the beginning of the queue. 

### Binary Search Tree

​								root/parent

​					left child 		right child

siblingA		 siblingB
*(leaf: a node with no children of its own)*

- a binary tree can only have two branches for each node.
- the left side of the tree will be less than (<50) the parent's value (50), the right side will be more (>50) -> makes for effective sorting
- a balanced tree (distance between minHeight and maxHeight is no more than 1) is more efficient to search

### Hash Tables

### linked list

for recipe versions?

- dynamic size
- efficient Insertions and deletions
- no random access
- no waste of memory
- sequential access is slow (elements not in contiguous memory locations)

### Trie

'prefix tree', a special kind of tree

### Heap

similir to a binary tree, but the order is different