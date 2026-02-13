function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val) // value
  this.next = (next === undefined ? null : next) // link to next ListNode
}
export function createList(arr) {
  if (!arr.length) return null
  return arr.length === 1 ? new ListNode(arr[0]) : new ListNode(arr [0], createList(arr.slice(1)))
}
export function convertToArray(list) {
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
