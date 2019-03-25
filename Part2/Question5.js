//题目：用两个栈实现一个队列，分别完成在队列的尾部插入节点和在队列的头部删除节点

var inStack = [],
    outStack = [];

//尾部插入节点
function push(node) {  
	inStack.push(node);
}

//头部删除节点
function pop() {
	if (outStack.length <= 0) {
		while (inStack.length > 0 ) {
			outStack.push(inStack.pop());
		}
	}
	return outStack.pop();
}