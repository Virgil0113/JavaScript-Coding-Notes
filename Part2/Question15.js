//题目：输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
/*思路：
1.如果pHead1和pHead2中有一个为空，则result是另一个；
2.如果pHead1的头结点值小于pHead2，那么result的头结点为pHead1的头结点，其next为pHead1.next和pHead2比较的结果。同理对pHead2也一样。
3.因此本题可采用递归的方法。 */

function Merage(pHead1,pHead2){
	if (pHead1 == null) {
		return pHead2;
	}
	else if (pHead2 == null) {
		return pHead1;
	}
    var result = [];
    if (pHead1.val < pHead2.val) {
    	result = pHead1;
    	result.next = Merage(pHead1.next,pHead2);
    } else {
    	result = pHead2;
    	result.next = Merage(pHead2.next,pHead1);
    }
    return result;
}