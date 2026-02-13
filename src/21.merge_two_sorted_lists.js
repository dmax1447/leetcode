// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/771/

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
import {createList, convertToArray} from "./lists";

var mergeTwoLists = function(list1, list2) {
  if (!list1 || list1.val === undefined) return list2
  if (!list2 || list2.val === undefined) return list1
  let merged
  let mergedLastNode
  let tail1 = list1
  let tail2 = list2

  // get merge head
  if (tail1.val < tail2.val) {
    merged = tail1
    tail1 = tail1.next
  } else {
    merged = tail2
    tail2 = tail2.next
  }
  merged.next = null
  mergedLastNode = merged
  while (tail1 && tail2) {
    if (tail1.val < tail2.val) {
      mergedLastNode.next = tail1
      tail1 = tail1.next
    } else {
      mergedLastNode.next = tail2
      tail2 = tail2.next
    }
    mergedLastNode = mergedLastNode.next
  }
  if (tail1) mergedLastNode.next = tail1
  if (tail2) mergedLastNode.next = tail2
  return merged
};

const list_1 = createList([0]) //?
const list_2 = createList([undefined]) //?

const merged = mergeTwoLists(list_1, list_2)
convertToArray(merged) //?
