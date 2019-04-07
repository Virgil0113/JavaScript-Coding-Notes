//题目：输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。
/*思路:使用JavaScript的Array对象的sort()方法进行自小到大排序，然后输出最小的k个数。 */

function GetLeastNumbers_Solution(input, k)
{
    if(input.length < k) return false;
    input.sort(function(a,b){return a-b;});
    return input.slice(0,k);
}