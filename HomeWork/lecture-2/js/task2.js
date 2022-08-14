// function sayHiToUser(name) {
//     alert(`Привет, ${name}! Приятно познакомиться!`);
// }
// const userNames = ["Андрей", "Николай", "Юрий", "Борис", "Руслана","Елизавета"]
// userNames.push(prompt("Как тебя зовут?"));
// for (let i = 0; i < userNames.length; i++ ) {
//     sayHiToUser(userNames[i]);
// }

const sayHiToUser = (name) => {
 alert(`Привет, ${name}! Приятно познакомиться!`);
}

const userNames = ['Андрей', "Игорь", "Антон", "Егорка", "Валерчик"];
userNames.push(prompt('Как тебя зовут?'));

userNames.forEach((item) => sayHiToUser(item));
