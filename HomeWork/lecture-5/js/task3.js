const valuesArray = [1, 2, 3, 4, 5, 6, 7];

const without = (value, value2) => valuesArray.filter(el => el !== value && el !== value2);
const without2 = (arr, exceptions = []) => {
  return arr.filter((value) => !exceptions.includes(value))
}
const without3 = (arr = [], exceptions = []) =>
  arr.filter((value) => !exceptions.includes(value));

console.log(without(5,6));
console.log(without3());
console.log(without2(valuesArray));

