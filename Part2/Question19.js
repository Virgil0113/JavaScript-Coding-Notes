//题目：定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。
var stack=[];
function push(node)
{
    return stack.push(node);
}
function pop()
{
    return stack.pop();
}
function top()
{
    return stack[0];
}
function min()
{
    return Math.min.apply(this,stack);
}
module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};