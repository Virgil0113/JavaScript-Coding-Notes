//题目：给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
/**思路
 * 1.全面考察指数的正负、底数是否为零等情况。
 * 2.写出指数的二进制表达，例如13表达为二进制1101。
 * 3.举例:10^1101 = 10^0001*10^0100*10^1000。
 * 4.通过&1和>>1来逐位读取1101，为1时将该位代表的乘数累乘到最终结果。
 其中要理解base*=base这一步：因为 base*base==base2，下一步再乘，就是base2*base2==base4，然后同理 base4*base4=base8，
 由此可以做到base–>base2–>base4–>base8–>base16–>base32…….指数正是 2^i
 */

function Power(base, exponent)
{
    var n = Math.abs(exponent);
    var result = 1.0;
    if (n === 0) return 1
    else if (exponent < 0 && base === 0) { //值为无穷大
        throw new RuntimeException("分母不能为0");
    } else {
        while(n) {
            if(n & 1 == 1) {
                result *= base; //为1时将该位代表的乘数累乘到最终结果
            }
            base *= base; //翻倍
            n = n>>1;//右移一位
        }
        return exponent > 0 ? result : 1/result;
    }
}
