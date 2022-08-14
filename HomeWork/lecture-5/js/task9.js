const valuesArray = [10, 15, 7, 20, 33, 40, 50];

const minimumValue = (arr) => arr.reduce((prev, item) => Math.min(prev, item));
console.log(minimumValue(valuesArray));
