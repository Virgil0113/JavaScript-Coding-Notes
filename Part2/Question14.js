//题目：输入一个链表，反转链表后，输出新链表的表头。
/*思路：
1.pHead为当前结点，如果当前结点为空的话，直接返回；
2.pHead为当前结点，pre为当前结点的前一个结点，next为当前结点的下一个结点；
3.需要完成的目标是将pre-->pHead-->next1-->next2-->··· ···-->end反转为pre<--pHead<--next1<--next2<--··· ···<--end；
4.pre结点可以用来反转方向，为了避免反转之后链表断开，用next结点暂时保存next1结点；
5.先用next保存pHead的下一个结点信息，保证单链表不会断裂；
6.保存之后，让pHead从指向next变成指向pre；
7.到此，完成了pre到pHead的反转，即pre<--pHead;
8.将pre，pHead，next依次向后移动一个结点。
9.循环操作，直到pHead为null，此时pre就是链表的最后一个结点，链表反转完毕，pre为反转后链表的第一个结点。
10.输出pre就是反转之后所得的链表。 */
 
function ReverseList(pHead)
{
   var pre = null;
    var next = null;
    while (pHead != null) {
        next = pHead.next;
        pHead.next = pre;
        pre = pHead;
        pHead = next;
    }
    return pre;
}

