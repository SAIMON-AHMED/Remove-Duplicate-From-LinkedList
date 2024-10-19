# Remove Duplicate From LinkedList

This repository contains the implementation of the removeDuplicatesFromLinkedList function, which removes duplicate values from a sorted linked list. The function operates in O(n) time complexity and uses O(1) space, making it efficient for large lists.

**Problem Description**

You are given a sorted singly linked list where each node contains an integer value. The goal is to modify the list in place by removing all duplicate nodes, ensuring that each value appears only once.

**Input**

linkedList: A singly linked list represented by a class LinkedList, where value is the value of the current node and next is a reference to the next node in the list (or null if it's the last node).

**Output**

Returns the modified linked list with all duplicate values removed.

**Approach**

The algorithm follows these steps:

**Initialization:**

Start from the head of the linked list and iterate through each node.

**Comparison:**

1. For each node, compare its value with the value of the next node.
2. If the current node’s value is the same as the next node’s value, skip the next node by pointing the current node’s next pointer to the node after the next.
3. If the values are different, move the pointer to the next node.
   
**In-Place Modification:**

The linked list is modified in place, meaning no additional data structures are used, achieving constant space complexity.


**Return:**

After processing all the nodes, return the modified linked list.

Example Usage

	const { LinkedList, removeDuplicatesFromLinkedList } = require('./removeDuplicates');
	
	// Create a sorted linked list: 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6
	let list = new LinkedList(1);
	list.next = new LinkedList(1);
	list.next.next = new LinkedList(3);
	list.next.next.next = new LinkedList(4);
	list.next.next.next.next = new LinkedList(4);
	list.next.next.next.next.next = new LinkedList(4);
	list.next.next.next.next.next.next = new LinkedList(5);
	list.next.next.next.next.next.next.next = new LinkedList(6);
	list.next.next.next.next.next.next.next.next = new LinkedList(6);
	
	// Remove duplicates
	list = removeDuplicatesFromLinkedList(list);
	
	// After removing duplicates: 1 -> 3 -> 4 -> 5 -> 6
 
 **Time and Space Complexity**

Time Complexity: O(n), where n is the number of nodes in the linked list. Each node is visited once during the traversal.

Space Complexity: O(1), since the algorithm uses a constant amount of extra space regardless of the input size.

**Conclusion**

This implementation efficiently removes duplicates from a sorted linked list while maintaining a low time and space complexity, making it suitable for handling large datasets.
