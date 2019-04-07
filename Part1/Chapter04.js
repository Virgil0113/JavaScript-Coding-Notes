function divideBy2(decNumber) {
  var remStack = new Stack(),
  rem,
  binaryString = '';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2); //得到当前结果和2的余数
	  remStack.push(rem);
	  decNumber = Math.floor(decNumber / 2); //让结果和2做整除
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString(); // 把出栈的元素连接成字符串
  }
  return binaryString;
}

//十进制转换成其他任意进制
function baseConverter(decNumber,base) {
  var remStack = new Stack(),
  rem,
  binaryString = '',
  digits = '0123456789ABCDEF'; //16进制时需要对栈中的数字逐个转换
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base); 
	  remStack.push(rem);
	  decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]; 
  }
  return binaryString;
}