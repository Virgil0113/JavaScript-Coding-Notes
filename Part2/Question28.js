//题目：数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
/*思路：
新建一个空对象obj保存数组中数字出现的次数；
遍历数组，如果该数字出现过，则obj中以该数字为key的value加1；
若该数字未出现过，则obj中以该数字为key的value设为1；
遍历obj对象，返回value大于数组长度一半的key，即为所求数字。 */

function MoreThanHalfNum_Solution(numbers)
{
  var obj = {};
  var length = numbers.length;
  numbers.forEach(function(d) {
    if (obj[d]) {
      obj[d]++;
    } else {
      obj[d] = 1;
    }
  })
  for (var i in obj) {
    if (obj[i] > Math.floor(length / 2)) {
      return i;
    }
  }
  return 0;
}