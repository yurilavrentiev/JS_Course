// 2. Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.

const isObject = {};
const isArray = [];
const isNull = null;
const isNumber = 10;
const isString = 'hello';

function isPlainObject(element) {
  if (typeof element === 'object') {
    if (element === null || Array.isArray(element)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

console.log(isPlainObject(isObject));
