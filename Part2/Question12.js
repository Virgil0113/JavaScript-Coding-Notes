//题目：输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
/*思路：
新建两个数组，分别用来存放奇数和偶数；
将偶数的数组连接到奇数数组后面。 */

function reOrderArray(array) {
	var odd = [],
	    even = [];
	for (var i=0; i<array.length; i++) {
		if (array[i] % 2 == 0) {
			even.push(array[i]);
		} else {
			odd.push(array[i]);
		}
	}
	return odd.concat(even);
}