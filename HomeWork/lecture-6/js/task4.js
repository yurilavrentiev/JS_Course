// 4. Напишите функцию, которая поверхностно сравнивает два объекта.
// * Ожидаемый результат: true если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

const testObject1 = {
  a: 1,
  b: 2,
  c: 3,
};
const testObject2 = {
  a: 1,
  b: 2,
  c: 3,
};

function matchObject (obj1, obj2) {
  let result;
  for (keys in obj1) {
    if (obj1[keys] === obj2[keys]) {
      result = true;
    } else {
      return false;
    }
  };
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    result = false;
  }
  return result;
};
console.log(matchObject(testObject1, testObject2));


// Второй вариант решения - криво работает (так и не разобрался до конца)

// function matchObject (obj1, obj2) {
//   const test1 = Object.entries(obj1);
//   const test2 = Object.entries(obj2);
//   let result;

// for (let i = 0; i < test1.length; i++) {
//   if (test1[i][0] == test2[i][0] && test1[i][1] == test2[i][1]) {
//     result = true;
//   } else {
//     result = false;
//     return false;
//   }

//   if (test1.length !== test2.length) {
//       result = false;
//       console.log(result)
//   } 
//   }
//   return result;
// }
// console.log(matchObject(testObject1, testObject2));
