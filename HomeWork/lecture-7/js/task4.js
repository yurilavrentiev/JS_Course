const anyString = 'string';
const stringToArray = [];
const someArray = [];

someArray.forEach.call(anyString, ((item) => stringToArray.push(item)));

console.log(stringToArray.join(', '));
