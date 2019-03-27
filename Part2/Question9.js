//题目：我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
//请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

/*思路：依旧是斐波那契数列
（1）当 n<1 时，不需要覆盖，依据题意返回0。
（2）当 n=1 时，只存在1种情况。
（3）当 n=2 时，存在2种情况。
（4）当 n=3 时，有3种情况
（5）自然可以得出规律 f(n)=f(n-1)+f(n-2) (n>2)
 (6) 更一般的结论，如果用1*m的方块覆盖m*n区域，递推关系式为f(n) = f(n-1) + f(n-m)，(n > m)。*/

 function rectCover(number)
{
    if (number < 1) return 0;
    if (number == 1 || number == 2) return number;
    return rectCover(number-1) + rectCover(number-2)
}