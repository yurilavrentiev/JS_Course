function getSum(someValue) {
  let result = 0;
  let i;
  for (i = 0; i < arguments.length; i++) {
    result += arguments[i]; 
  }
  return result;
}
console.log(getSum(1,2,3,4,5));
