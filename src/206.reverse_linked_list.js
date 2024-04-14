// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

import {createList, convertToArray} from "./helpers/lists";

// const list = createList([2,4,6,8])
// console.log(convertToArray(list)) //?

var reverseList2 = function(head) {
  if (!head || head.val === null || head.next === null) return head
  const stack = []
  let node = head
  while (node) {
    stack.push(node)
    node = node.next
  }
  let reversedList = stack.pop()
  let currentNode = reversedList
  while (stack.length) {
    const nodeToAttach = stack.pop()
    nodeToAttach.next = null
    currentNode.next = nodeToAttach
    currentNode = currentNode.next
  }
  return reversedList //?
};

const list = createList([1,2,3,4,5])

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

const reversed = reverse(list)


convertToArray(reversed) //?
