function factorial(a) {
    let sum = 0
    for (let i = 1; i <= a; i++) {
    sum = sum + i;
    }
    return sum;
}
const number = +prompt("Введи целое число - я посчитаю его факториал!");
if (isNaN(number)) {
    alert("Вы ввели неверное значение! Используйте цифры!");
} else if (number < 0 || number % 1 !== 0) {
    alert("Вы ввели отрицательно или не целое число! Ведите целое число больше 0!");
} else {
alert("Вот, что получилось: " + factorial(number));
}
