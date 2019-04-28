function inOrderTraverse (callback) {
	inOrderTraverseNode(root, callback);
}

function inOrderTraverseNode (node, callback) {
	if (node !== null) {
		inOrderTraverseNode(node.left, callback);
		callback(node.key);
		inOrderTraverseNode(node.rigth, callback);
	}
}

function printNode(value) {
	console.log(value);
}
tree.inOrderTraverse(printNode);