function hotPotato (nameList, num) {
  let queue = new Queue();
  for (let i=0; i<nameList.length; i++) {
    queue.enqueue(nameList[i]); // 得到一份名单把名字全部加入队列
  }
  let eliminated = "";
  while (queue.size() > 1) {
    for (let i=0; i<num; i++) {
	  queue.enqueue(queue.dequeue()); //从队列开头移除一项，再将其添加到队列末尾
	}
	eliminated = queue.dequeue();
	console.log(eliminated + "在击鼓游戏中被淘汰。")；
  }
  return queue.dequeue(); //最后剩下的人就是胜者
}