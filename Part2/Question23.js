//题目：输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)
/*思路
前序遍历二叉树，每次更新当前路径的和curtSum；
判断当前结点是否是叶子结点，以及curtSum是否等于expectNumber。如果是，把当前路径保存在res结果中；
若不符合条件，则弹出此结点。 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function FindPath(root, exceptNumber) {
	var result = [];
	if (root === null) {
		return result;
	}
	dfsFind(root, exceptNumber, [], 0, result);
	return result;
}

function dfsFind(root, expectNumber, path, currentSum, result) {
	currentSum += root.val;
	path.push(root.val);
	if (currentSum == expectNumber && root.left == null && root.right == null) {
		result.push(path.slice(0));
	}
	if (root.left != null) {
		dfsFind(root.left, exceptNumber, path, currentSum, result);
	}
	if (root.right != null) {
		dfsFind(root.right, exceptNumber, path, currentSum, result);
	}
	path.pop();
}