this.append = function(element) {
	let node = new Node(element),
	  current;
    if (head === null) { //列表中第一个节点
    	head = node;
    } else {
    	current = head;
    	//循环列表，直到找到最后一项
    	while(current.next) {
    		current = current.next;
    	}
    	//找到最后一项，将其next赋为node，建立链接
    	current.next = node;
    }
    length++; //更新列表的长度
};