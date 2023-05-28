class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function sortLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  const getMiddle = (node) => {
    let slow = node;
    let fast = node.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  };

  const merge = (left, right) => {
    const dummy = new ListNode(0);
    let current = dummy;

    while (left && right) {
      if (left.val <= right.val) {
        current.next = left;
        left = left.next;
      } else {
        current.next = right;
        right = right.next;
      }
      current = current.next;
    }

    current.next = left ? left : right;

    return dummy.next;
  };

  const mergeSort = (node) => {
    if (!node || !node.next) {
      return node;
    }

    const middle = getMiddle(node);
    const nextToMiddle = middle.next;
    middle.next = null;

    const left = mergeSort(node);
    const right = mergeSort(nextToMiddle);

    return merge(left, right);
  };

  return mergeSort(head);
}
