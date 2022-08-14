// 6. sortByProp. Напишите функцию, которая отсортирует массив объектов по имени свойства
//
// const users = [
// 	{ name: 'Bob', age: 20 },
// 	{ name: 'Sam', age: 10 },
// 	{ name: 'Anna', age: 29 },
// 	{ name: 'Jim', age: 15 },
// 	{ name: 'Alex', age: 45 },
// 	{ name: 'Mick', age: 23 },
// ];
// sortByProp(массив объектов, свойство)
// sortByProp(arrayOfObjects, property)
// sortByProp(users, age)
// вернет массив отсортированных объектов
// доп: проверить есть ли свойство в объекте если нет то возвращаем массив без изменений


const users = [
  { name: 'Bob', age: 20 },
  { name: 'Sam', age: 10 },
  { name: 'Anna', age: 29 },
  { name: 'Jim', age: 15 },
  { name: 'Alex', age: 45 },
  { name: 'Mick', age: 23 },
];

function sortByProp (valuesArray, propName) {
let result = [];
  for (let keys of valuesArray) {
    if (propName in keys) {
      result = valuesArray.sort((a, b) => a[propName] > b[propName] ? 1 : -1);
      return result;
    } else {
      return valuesArray;
    }
  }
};
    
console.log(sortByProp(users, 'name'));
