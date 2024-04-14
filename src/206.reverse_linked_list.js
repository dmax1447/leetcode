// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val) // value
  this.next = (next === undefined ? null : next) // link to next ListNode
}
function createList(arr) {
  return arr.length === 1 ? new ListNode(arr[0]) : new ListNode(arr [0], createList(arr.slice(1)))
}
function convertToArray(list) {
  const arr = []
  let {val, next} = list
  if (!val) return arr
  arr.push(val)
  while (next) {
    arr.push(next.val)
    next = next.next
  }
  return arr
}

// const list = createList([2,4,6,8])
// console.log(convertToArray(list)) //?

var reverseList = function(head) {
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

let reversed = reverseList(list) //?
convertToArray(reversed) //?
