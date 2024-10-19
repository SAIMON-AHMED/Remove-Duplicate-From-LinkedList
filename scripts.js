// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Time -> O(n) | Space -> O(1) - where n is the number of nodes
function removeDuplicatesFromLinkedList(linkedList) {
  
  let cur = linkedList;
  
  while (cur.next != null) {
    let nextNode = cur.next;
    if (cur.value === nextNode.value) {
      cur.next = nextNode.next;
    } else {
      cur = cur.next;
    }
  }
  return linkedList;
}
