// const year = prompt("Введите год!"); // to num
// if (0 >= (+year)) {
//   alert("Вы ввели отрицательное значение! Введите число больше 0!");
// } else if ((+year) % 4 == 0 && (+year) % 100 !== 0 || (+year) % 400 == 0) {
//   alert(`Год ${year} високосный! (366 дней)`);
// } else {
//   alert(`Год ${year} не високосный! (365 дней)`);
// }

const year = +prompt('Введи год и я скажу висосный он или нет!');

switch (true) {
  case year <= 0:
    alert('Ты ввел отричательное значение! Введи число больше 0!');
    break;
  case year % 4 === 0 && year % 100 !== 0 || year % 400 === 0:
    alert(`Год ${year} високосный! (366 дней)`);
    break;
  default:
    alert(`Год ${year} не високосный! (365 дней)`);
    break;
}