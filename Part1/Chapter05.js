function PriorityQueue() {
  let items = [];
  function QueueElement (element, priority) {
    this.element = element;
	this.priority = priority;
  }
  this.enqueue = function(element,priority) {
    let queueElment = new QueueElement(element,priority);
	let added = false;
	for (let i=0; i<items.length; i++) {
	  if (queueElment.priority < items[i].priority) { //如果队列为空将元素入列，否则比较元素与其他元素的优先级
	    items.splice(i,0,queueElment); //一旦找到priority值更大的元素，就擦入新元素
		added = true;
		break;
	  }
	}
	if (!added) { // 如果要添加元素的priority值大于任何已有元素，把它添加到队列的末尾就行了
	  items.push(queueElment);
	}
  };
}