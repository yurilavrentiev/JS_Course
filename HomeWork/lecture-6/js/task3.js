// 3. Напишите функцию, которая возвращает новый объект без указанных значений. первый параметр obj второй массив свойств которые мы удалим
// getObjWithout({ a: 1, b: 2 }, ['b']) => { a: 1 }

const object = {
  a: 1,
  b: 2,
  c: 3
};

function newObject(obj, prop) {
  const objectClone = {...obj};
  delete objectClone[prop];
  return objectClone;
}

console.log(newObject(object, 'b'));
