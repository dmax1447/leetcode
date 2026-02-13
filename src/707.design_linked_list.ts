class MyListNode {
  public val: number | null
  public next: MyListNode | null
  public prev: MyListNode | null
  constructor(val?: number) {
    this.val = val ?? null
    this.next = null
    this.prev = null
  }
}

class MyLinkedList {
  public head: MyListNode | null
  public tail: MyListNode | null

  constructor() {
    this.head = null
    this.tail = null
  }

  get(index: number): number {
    let node = this.head
    let i
    for(i = 0; i < index; i++)  {
      if (!node.next) return -1
      node = node.next
    }
    return node ? node.val : -1
  }

  addAtHead(val: number): void {
    const node = new MyListNode(val)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      const oldHead = this.head
      this.head = node
      this.head.next = oldHead
      oldHead.prev = this.head
    }
  }

  addAtTail(val: number): void {
    const node = new MyListNode(val)
    if (this.tail === null) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
  }

  addAtIndex(index: number, val: number): void {
    if (index === 0) {
      this.addAtHead(val)
      return
    }
    if (!this.tail) {
      return
    }
    const newNode = new MyListNode(val)
    let nodeAtIndex = this.head
    let i

    for(i = 0; i < index; i++)  {

      if (!nodeAtIndex?.next) break
      nodeAtIndex = nodeAtIndex.next as MyListNode
    }
    if (index > i + 1) return
    if (index === i + 1) {
      this.addAtTail(val)
      return
    }
    const prevNode = nodeAtIndex.prev
    prevNode.next = newNode
    newNode.prev = prevNode
    nodeAtIndex.prev = newNode
    newNode.next = nodeAtIndex
  }

  deleteAtIndex(index: number): void {
    let nodeAtIndex = this.head
    for(let i = 0; i < index; i++)  {
      if (!nodeAtIndex) return
      nodeAtIndex = nodeAtIndex.next
    }
    if (!nodeAtIndex) return
    const prevNode = nodeAtIndex.prev
    const nextNode = nodeAtIndex.next

    if (prevNode) {
      prevNode.next = nextNode
    } else {
      this.head = nextNode
    }
    if (nextNode) {
      nextNode.prev = prevNode
    } else {
      this.tail = prevNode
    }
  }

  print() {
    let node = this.head
    const list = []
    while(node) {
      list.push(node.val)
      node = node.next
    }
    console.log(`[${this.head?.val ?? null}] (${list.join('->')}) [${this.tail?.val ?? null}]`)
  }
  rawPrint() {
    console.log('\n--- debug start ----')
    console.log('nodes:\n')
    let node = this.head
    while(node) {
      console.log(node)
      node = node.next
    }
    console.log('\n-------\nlist pointers:', this)
    console.log('--- debug end ----\n')
  }
}
