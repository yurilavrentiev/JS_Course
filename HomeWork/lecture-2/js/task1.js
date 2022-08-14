// function sum(a,b) {
// return a + b;
// }
// const firstNumber = +prompt("Введите число");
// const secondNumber = +prompt("Введите второе число");
// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     alert("Вы ввели неверное значение! Введите, пожалуйста числа!");
// } else {
//     alert("Сумма ваших чисел: " + sum(firstNumber,secondNumber));
// }

const getSum = (a,b) => a + b;
const firstNumber = +prompt('Введите число!');
const secondNumber = +prompt('Введите второй число!');

switch (true) {
  case isNaN(firstNumber) || isNaN(secondNumber):
    alert('Вы ввели неверное значение! Введите, пожалуйста числа!');
    break;
  default:
    alert(`Сумма ваших чисел: ${getSum(firstNumber, secondNumber)}`);
    break;
}
