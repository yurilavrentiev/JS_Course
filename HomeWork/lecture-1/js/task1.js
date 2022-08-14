// const firstName = prompt("Please, enter your first name!");
// const lastName = prompt("Please, enter your last name!");
// const space = " " // пробел после равно и осознанное имя переменной типа space
// alert ("Your name is: " + firstName + space + lastName); // пробелы между знаками

const firstName = prompt('Please, enter your first name!');
const lastName = prompt('Please, enter your last name!');

const sayHiToUser = (name1, name2) => alert(`Hello, ${name1} ${name2}, nice to meet you!`);

sayHiToUser(firstName, lastName);
