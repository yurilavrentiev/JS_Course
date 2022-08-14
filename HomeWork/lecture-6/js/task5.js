// 5. создать функцию которая принимает массив данных [1,24,'Bob', true, null, { name: 'Sam', age: 10 }, ...и тд]и возвращает объект {index0: 1, index1: 24, index2: 'Bob', ..... и тд}

const valuesArray = [1, 24,'Bob', true, null, { name: 'Sam', age: 10 }, [1, 2]];

function createObject(array) {
  const resultObject = {};

  array.forEach((element, index) => {
  resultObject['index' + index] = element});

  return resultObject;
};

console.log(createObject(valuesArray));
