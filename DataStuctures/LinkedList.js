/**
 * `Node` is used to store values in a linked list
 */
class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

/**
 * The `LinkedList` class holds a reference to the `head` node and has functions that update the list.
 */

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * The number of nodes in the linked list
   *
   * @returns {number}
   *   The number of nodes in the linked list
   */

  get length() {
    let result = 0;
    let node = this.head;

    while (node) {
      result++;
      node = node.next;
    }
    return result;
  }

  /**
   * Insert a new value at the head of the list
   * @param value
   *  The new value to insert
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained
   */
  insertAtHead(value) {
    this.head = new Node(value, this.head);
    return this;
  }

	/**
	 * Insert a new value at the end of the list
	 * @param value
	 *  The new value to insert
	 *
	 * @returns {LinkedList}
	 *  this linked list so methods can be chained
	 */
	insertAtEnd(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			return this;
		}

		let node = this.head;

		while (node.next) {
			node = node.next;
		}

		node.next = newNode;
		return this;
	}

	/**
	 * Insert a new value after a given node
	 * @param value
	 *  The new value to insert
	 * @param node
	 *  The node to insert the new value after
	 *
	 * @returns {LinkedList}
	 *  this linked list so methods can be chained
	 */
	insertAfter(value, node) {
		const newNode = new Node(value, node.next);
		node.next = newNode;
		return this;
	}

	/**
	 * Insert a new value before a given node
	 * @param value
	 *  The new value to insert
	 * @param node
	 *  The node to insert the new value before
	 *
	 * @returns {LinkedList}
	 *  this linked list so methods can be chained
	 */
	insertBefore(value, node) {
		if (this.head === node) {
			return this.insertAtHead(value);
		}

		let current = this.head;

		while (current.next !== node) {
			current = current.next;
		}

		return this.insertAfter(value, current);
	}

	/**
	 * Remove the head node from the list
	 *
	 * @returns {Node}
	 *  The removed node
	 */
	removeHead() {
		const removed = this.head;
		this.head = removed.next;
		return removed;
	}

	/**
	 * Remove the tail node from the list
	 *
	 * @returns {Node}
	 *  The removed node
	 */
	removeTail() {
		let current = this.head;

		while (current.next.next) {
			current = current.next;
		}

		const removed = current.next;
		current.next = null;
		return removed;
	}

	/**
	 * Remove a node from the list
	 * @param node
	 *  The node to remove
	 *
	 * @returns {Node}
	 *  The removed node
	 */
	remove(node) {
		if (this.head === node) {
			return this.removeHead();
		}

		let current = this.head;

		while (current.next !== node) {
			current = current.next;
		}

		current.next = node.next;
		return node;
	}
}

module.exports = LinkedList;