function compare(a, b){
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  //a必须等于b
  return 0;
}

numbers.sort(compare);