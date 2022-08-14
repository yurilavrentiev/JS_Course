// const minAge = 18;
// const userAge = prompt("Сколько тебе лет?"); // to number
// if (minAge <= (+userAge)) {
//   alert("Добро пожаловать!");
// } else {
//     alert("Попробуй чуть позже!"); // 1 tab
// }

const minAge = 18;
const userAge = prompt('Сколько тебе лет?');

switch (true) {
  case userAge >= minAge:
    alert('Добро пожаловать!')
    break;
  default:
    alert('Попробуй через годик!');
    break;
}
