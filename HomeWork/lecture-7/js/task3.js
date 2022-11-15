function numberPow (x, n) {
  return (n === 1) ? x : x * numberPow(x, n - 1);
};

console.log(numberPow(10, 5));
