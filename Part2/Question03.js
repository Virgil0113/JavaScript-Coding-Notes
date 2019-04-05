//题目： 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList.
//思路：从头遍历链表值以unshift的方式链表值存入一个新数组，从头打印数组即可

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function printListFromTailToHead(head) {
	var res = [];
	while (head != null) {
		res.unshift(head.val)
		head = head.next;
	}
    return res;
}