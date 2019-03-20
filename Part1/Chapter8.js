this.removeAt = function(position) {
	//检查越界
	if (position > -1 && position < length) {
		let current = head,
		previous,
		index = 0;

		//移除第一项
		if （position === 0） {
			head = current.next;
		}else{
			while (index++ < positon) {
				previous = current;
				current = current.next;
			}

			//将previous与current的下一项链接起来:跳过current，从而移除它
			previous.next = current.next;
		}

		length--;
		return current.element;

	} else {
		return null;
	}
};