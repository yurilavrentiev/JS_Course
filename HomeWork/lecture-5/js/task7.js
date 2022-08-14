const defaultArray = [1, 10, 'hello', 20, 40, 50, 'hello'];

const removeItems = (arr, value) => arr.filter(item => value !== item);

console.log(removeItems(defaultArray, 50));
