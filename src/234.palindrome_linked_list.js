import {createList, convertToArray} from "./helpers/lists";

function reverseList(list) {
  let prevNode = null
  let currentNode = list
  while (currentNode)  {
    const nextNode = currentNode.next
    currentNode.next = prevNode
    prevNode = currentNode
    currentNode = nextNode
  }
  return prevNode
}

var isPalindrome = function(head) {
  let slow = head
  let fast = head
  while (fast) {
    slow = slow.next
    fast = fast.next?.next
  }
  let revesedHead = reverseList(slow)
  while (revesedHead) {
    if (revesedHead.val !== head.val) return false
    revesedHead = revesedHead.next
    head = head.next
  }
  return true

};

const list = createList([1, 1, 2, 3, 2, 1])

isPalindrome(list) //?



