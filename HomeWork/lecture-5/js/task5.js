const defaultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArray = (arr, n) => arr.reduce((prev, item) => n > prev.length ? prev.push(item) : [...prev, item], []);
const separateArray = (arr, inter) => {
  const resultArray = [];
  let innerArray = [];
  arr.forEach((item, index) => {
    innerArray.push(item);
    if ((index + 1) % inter === 0) {
      resultArray.push(innerArray);
      innerArray = [];
    }
  });
  if (innerArray.length > 0) {
    resultArray.push(innerArray);
  }
  return resultArray;
}
console.log(separateArray(defaultArray, 5));
