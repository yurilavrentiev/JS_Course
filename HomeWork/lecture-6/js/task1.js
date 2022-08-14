// 1.
// удалить свойство age,
// изменить свойство gender,
// добавить свойство массив объектов pets [{name: '',age: 0, classOfAnimal: 'dog'}]
// const userBob = {
// 	name: 'Bob',
// 	age: 21,
// 	gender: 'male',
// 	married: false,
// }

const userBob = {
  name: 'Bob',
  age: 21,
  gender: 'male',
  married: false
};
const petsArray = [{name: '', age: 0, classOfAnimal: 'Dog'}];

delete userBob.age;
userBob.gender = 'female';
userBob.pets = [...petsArray];

console.log(userBob);
