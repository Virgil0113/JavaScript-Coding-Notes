// 题目：请实现一个函数，把字符串中的每个空格替换成"%20"。例如输入“We are happy.”，
// 则输出“We%20are%20happy.”。

//正则表达式替换语句
function replaceSpace(str)
{
    return str.replace(/\s/g,'%20');
}

//字符串拼接
function replaceSpace(str)
{
    var newStr = '';
    for(var i = 0;i<str.length;i++){
        if(str[i]===' '){
            newStr+='%20';
        }else{
            newStr+=str[i];
        }
    }
return newStr;
}