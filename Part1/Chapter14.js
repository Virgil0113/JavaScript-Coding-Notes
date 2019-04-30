function postOrderTraverse (callback) {
	postOrderTraverseNode(root, callback);
}
function podtOrderTraverseNode (node, callback) {
	if (node != null) {
		postOrderTraverseNode(node.left, callback);
		postOrderTraverseNode(node.right, callback);
		callback(node.key);
	}
}