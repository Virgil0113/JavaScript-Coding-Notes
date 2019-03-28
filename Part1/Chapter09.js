this.insert = function(position, element) {
	//检查越界值
	if (position >= 0 && position <= length) {
		let node = new Node(element),
		current = head,
		previous,
		index = 0;
		if (position === 0)  { // 在第一个位置添加
           node.next = current;
           head = node;
		} else {
			while (index++ < position) {
				previous = current;
				current = current.next;
			}
			node.next = current;
			previous.next = node;
		}
		length++; //更新列表的长度
		return true;
	} else {
		return false;
	}
};