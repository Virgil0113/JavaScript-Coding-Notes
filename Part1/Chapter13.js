function preOrderTraverse (callback) {
	preOrderTraverseNode(root, callback);
}

function preOrderTraverseNode (node, callback) {
	if (node != null) {
		callback(node.key);
		preOrderTraverseNode(node.left, callback);
		preOrderTraverseNode(node.right, callback);
	}
}