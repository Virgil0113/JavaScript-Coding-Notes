// 递归方式
function fibonacci(num) {
  if (num === 1 || num === 2) { //1和2的斐波那契是1
      return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// 非递归方式
function fibonacci(num) {
  var n1 = 1,
      n2 = 1,
      n = 1;
  for (var i = 3; i<=num; i++) {
    n = n1 + n2;
    n1 = n2;
    n2 = n;
  }
  return n;
}