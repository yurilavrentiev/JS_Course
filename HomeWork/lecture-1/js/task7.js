// const psw = prompt("Введи пароль от 8 до 20 символов! Используй хотя бы одну цифру и символ @#$%");

// const hasNum = psw.includes("0") || psw.includes("1") || psw.includes("2")
//   || psw.includes("3") || psw.includes("4") || psw.includes("5")
//   || psw.includes("6") || psw.includes("7") || psw.includes("8") || psw.includes("9");

// const hasSym = psw.includes("@") || psw.includes("#") || psw.includes("$") || psw.includes("%");

// if (8 > psw.length) {
//   alert("Пароль слишком короткий! Используй не менее 8 символов!");
// } else if (20 < psw.length) {
//   alert("Пароль слишком длинный! Используй не более 20 символов!");
// } else if (hasNum && hasSym) {
//   alert("Пароль принят! Спасибо");
// } else {
//   alert("Некорректный пароль! Используйте хотя бы одну цифру и хотя бы один символ @#$%");
// }

const userPassword = prompt('Введи пароль длинной от 8 до 20 символов. Используй хотя бы одну цифру и спецсимвол @#$%');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ['@', '#', '$', '%'];

switch (true) {
  case userPassword.length < 8:
    alert('Пароль слишком короткий! Используй не менее 8 символов!');
    break;
  case userPassword.length > 20:
    alert('Пароль слишком длинный! Используй не более 20 символов!');
    break;
  case symbolsValidation(userPassword): 
    alert('Пароль принят! Спасибо!');
    break;
  default:
    alert('Некоректный пароль!')
    break;
}

function symbolsValidation(str) {
 return numbers.some((element) => str.includes(element)) &&
  symbols.some((element) => str.includes(element));
}
