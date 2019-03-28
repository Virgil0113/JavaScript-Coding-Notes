//自然数求和


//常规循环
function sum(arr) {
    var a = 0;
    for(var i=0; i< arr.length;i++){
        a += arr[i];
    }
    return a;
}

//使用递归
function sum(arr) {
    var len = arr.length;
    if(len == 0){
        return 0;
    } else if (len == 1){
        return arr[0];
    } else {
        return arr[0] + sum(arr.slice(1));
    }
}

//forEach遍历
function sum(arr) {
    var s = 0;
    arr.forEach(function(val, idx, arr) {
        s += val;
    }, 0);
  
    return s;
};

//eval
function sum(arr) {
    return eval(arr.join("+"));
};