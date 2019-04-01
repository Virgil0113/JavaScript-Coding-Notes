//题目：操作给定的二叉树，将其变换为源二叉树的镜像。
/*二叉树的镜像定义：源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5 
*/
/*思路
1.有关二叉树的算法问题，一般都可以通过递归来解决。那么写一个正确的递归程序，首先一定要分析正确递归结束的条件。
2.先前序遍历这棵树的每个结点，如果遍历到的结点有子结点，就交换它的两个子节点；
3.当交换完所有的非叶子结点的左右子结点之后，就得到了树的镜像 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
	if (root === null) {
		return;
	}
	var temp = root.left;
	root.left = root.right;
	root.right = temp;
	Mirror(root.left);
	Mirror(root.right);
}