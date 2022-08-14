const firstArray = [1, 2, 3, 4];
const secondArray = [1, 2, 3, 4];

const matchFunction = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
}
console.log(matchFunction(firstArray,secondArray));
