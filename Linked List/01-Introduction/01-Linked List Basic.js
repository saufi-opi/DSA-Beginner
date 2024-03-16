class ListNode {
  val;
  next;

  constructor(val = null, next = null){
    this.val = val
    this.next = next
  }
}

function constructLinkedList (arr) {
  let head = new ListNode(arr[0])
  let temp = head

  for (let i = 1; i < arr.length; i++) {
    let newNode = new ListNode(arr[i])
    temp.next = newNode
    temp = temp.next
  }

  return head
}


let list1 = constructLinkedList([1,2,3,4,5,6])
// traverse linked list
let head = list1
while (head) {
  console.log(head.val)
  head = head.next
}