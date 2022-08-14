const valuesArray = [1, 2, 0, '', NaN, undefined, 'hello', false, 16];

const newArray = valuesArray.filter((value) => value === 0 || Boolean(value));

console.log(newArray);
