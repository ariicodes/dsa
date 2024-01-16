# Data Structures

## Array

> A fundamental data structure in JavaScript used to store a collection of elements.

### Create

```javascript
let array = []; // Empty array
array.push(value); // Add an element at the end
array[index] = value; // Add/replace element at a specific index
```

### Read

```javascript
let value = array[index]; // Access element at a specific index
```

### Update

```javascript
array[index] = newValue; // Update element at a specific index
```

### Delete

```javascript
array.splice(index, 1); // Remove element(s) at a specific index
```

### List

```javascript
array.forEach(element => {
	// Perform operations on each element
});
```

## Object

> Key-value pairs that allow storing and accessing data using keys.

### Create

```javascript
let obj = {}; // Empty object
obj[key] = value; // Add key-value pair
```

### Read

```javascript
let value = obj[key]; // Access value using key
```

### Update

```javascript
obj[key] = newValue; // Update value for a key
```

### Delete

```javascript
delete obj[key]; // Delete a key-value pair
```

### List

```javascript
Object.keys(obj).forEach(key => {
	let value = obj[key];
	// Perform operations using key-value pairs
});
```

## Maps

> Similar to objects but with some differences, such as allowing any data type as keys.

### Create

```javascript
let map = new Map(); // Empty map
map.set(key, value); // Add key-value pair
```

### Read

```javascript
let value = map.get(key); // Access value using key
```

### Update

```javascript
map.set(key, newValue); // Update value for a key
```

### Delete

```javascript
map.delete(key); // Delete a key-value pair
```

### List

```javascript
map.forEach((value, key) => {
	// Perform operations using key-value pairs
});
```

## Sets

> A collection of unique values, allowing operations like adding, deleting, and checking for the presence of elements.

### Create

```javascript
let set = new Set(); // Empty set
set.add(value); // Add a value
```

### Read

```javascript
// Sets do not have direct indexing, so to read, you can iterate or check for existence
set.forEach(value => {
	// Perform operations with each value
});
```

### Update

```javascript
// Sets don't allow direct updates as they maintain uniqueness, so you'd remove and add to update.
```

### Delete

```javascript
set.delete(value); // Remove a value
```

### List

```javascript
set.forEach(value => {
	// Perform operations with each value
});
```

## Stacks

> Follows the Last-In-First-Out (LIFO) principle; elements are inserted and removed from the same end.

### Create - Push

```javascript
let stack = [];
stack.push(element);
```

### Read - Peek

```javascript
let topElement = stack[stack.length - 1];
```

### Update

```javascript
// Stacks follow a Last In, First Out (LIFO) order, so updating specific elements isn't a common operation.
```

### Delete - Pop

```javascript
let poppedElement = stack.pop();
```

### List - Iterate through elements

```javascript
for (let i = stack.length - 1; i >= 0; i--) {
	// Access each element in the stack
	let currentElement = stack[i];
}
```

## Queues

> Follows the First-In-First-Out (FIFO) principle; elements are inserted at the end and removed from the front.

### Create - Enqueue

```javascript
let queue = [];
queue.push(element);
```

### Read - Peek

```javascript
let frontElement = queue[0];
```

### Update

```javascript
// Queues follow a First In, First Out (FIFO) order, so updating specific elements isn't a common operation.
```

### Delete - Dequeue

```javascript
let dequeuedElement = queue.shift();
```

### List - Iterate through elements

```javascript
for (let i = 0; i < queue.length; i++) {
	// Access each element in the queue
	let currentElement = queue[i];
}
```

## Linked List

> A linear collection of elements where each element points to the next in the sequence.

### Create - Insert

```javascript
// Insert at the beginning
newNode.next = head;
head = newNode;

// Insert at a specific position
newNode.next = current.next;
current.next = newNode;
```

### Read - Traverse

```javascript
let current = head;
while (current !== null) {
	// Access each element in the linked list
	let currentElement = current.data;
	current = current.next;
}
```

### Update - Modify data

```javascript
current.data = newData;
```

### Delete - Remove

```javascript
// Remove from the beginning
head = head.next;

// Remove a specific element
previous.next = current.next;
```

### List

```javascript
// (Same as Read operation)
```

## Trees

> A hierarchical data structure with a root node and child nodes.

### Create - Insert

```javascript
// Insert as a child
newNode = new TreeNode(data);
parentNode.children.push(newNode);
```

### Read - Traverse

```javascript
function traverse(node) {
	// Access each element in the tree
	let currentElement = node.data;
	for (let child of node.children) {
		traverse(child);
	}
}
```

### Update - Modify data

```javascript
node.data = newData;
```

### Delete - Remove

```javascript
// Remove a child node
parentNode.children = parentNode.children.filter(child => child !== node);
```

### List

```javascript
// (Same as Read operation)
```
