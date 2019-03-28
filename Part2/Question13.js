//题目：输入一个链表，输出该链表中倒数第k个结点。
/*思路
两个指针，先让第一个指针和第二个指针都指向头结点，然后再让第一个指正走(k-1)步，到达第k个节点；
然后两个指针同时往后移动，当第一个结点到达末尾的时候，第二个结点所在位置就是倒数第k个节点了。
本题考察鲁棒性，因此要判断空值和负值以及k值不能超过链表的长度。
本题链表不含头结点。
*/

function FindKthToTail(head, k)
{
   if(!head || k <= 0) return null;
    var first = head, last;
    for(var i = 1; i < k; i++){
        first = first.next;
        if(first == null)
            return null;
    }
    last = head;
    while(first.next != null){
        first = first.next;
        last = last.next;
    }
return last;
}

