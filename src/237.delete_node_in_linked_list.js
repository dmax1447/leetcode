// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/


var deleteNode = function(node) {
  let nextNode = node.next
  node.val = nextNode.val
  node.next = nextNode.next
  nextNode.next = null
  delete nextNode
};
