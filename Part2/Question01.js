// 题目：在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按
// 照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个
// 整数，判断数组中是否含有该整数。

/* 思路
* 矩阵是有序的，从左下角来看，向上数字递减，向右数字递增，
* 因此从左下角开始查找，当要查找数字比左下角数字大时。右移
* 要查找数字比左下角数字小时，上移
*/

function findInMatrix(target, array) {
    var row = array.length;  // 行数
    var col = array[0].length;  // 列数
    // 从左下角开始比较
    var i = row - 1; //当前行数
    var j = 0; //当前所在列数
    while(i >= 0 && j < col) { 
        if (target > array[i][j]) {
            j++;
        } else if (target < array[i][j]) {
            i--;
        } else {
            return true; //找到目标
        }
    }
    return false; //未找到目标
}