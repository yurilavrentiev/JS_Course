// const length = prompt("Please, enter the length!"); //осознанные имена переменных типа space
// const height = prompt("Please, enter the height!"); // меняй тип на number тут ты строку * строку
// const square = (+length) * (+height); // пробелы между знаками
// alert("The square is: " + square.toFixed(1)); // toFixed это не совсем округление мы берем строку и удаляем символы после запятой то есть '3.99'.toFixed(1) => 3.9 или '3.99'.toFixed() => 3, попробуй перевести строку к типу число и использовать Math.round(square)

const length = +prompt('Введите длинну:');
const height = +prompt('Введите ширину:');

const countSquare = (a, b) => alert(`Площадь прямоугольника с заданными параметрами: ${Math.round(a * b)}`);

countSquare(length, height);
