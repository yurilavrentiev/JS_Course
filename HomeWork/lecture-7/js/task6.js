// function getSum (...rest) {
//   let sum = 0;
//   for (let value of rest) {
//     sum += value;
//   }
//   return sum;
// }

// console.log(getSum(1,2,3,4,5));


function getSum () {
  let sum = 0;
  for (let value of arguments) {
    sum += value;
  }
  return sum;
}

console.log(getSum(1,2,3,4,5,6));
