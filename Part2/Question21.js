//题目：从上往下打印出二叉树的每个节点，同层节点从左至右打印。
/*思路
1.借助两个辅助队列，一个用来存放结点，一个用来存放结点值；
2.先将根节点加入到队列中，然后遍历队列中的元素，遍历过程中，访问该元素的左右节点，再将左右子节点加入到队列中来。 */

function PrintFromTopToBottom(root) {
	var queue = [];
	queue.push(root);
	var result = [];
	if (root == null) {
		return result;
	}
	while (queue.length != 0) {
		var temp = queue.shfit();
		result.push(temp.val);
		if (temp.left) {
			queue.push(temp.left);
		}
		if (temp.right) {
			queue.push(temp.right);
		}
	}
	return result;
}