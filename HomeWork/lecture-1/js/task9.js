function getRandomNumber(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1) + min);
}
const userPick = prompt("Давай сыграем! Пиши: камень, ножницы или бумага!");
const randomNumber = getRandomNumber(1,3);
let userNumber;
if (userPick === "ножницы" ) {
  userNumber = 1;
} else if (userPick === "камень") {
  userNumber = 2;
} else if (userPick === "бумага") {
  userNumber = 3;
} else {
    alert("Не жульничай! Выбери одно из трех!");
}

if (userNumber === randomNumber) {
    alert(`Ничья! ${userPick} - ${userPick}!`);

} else if (!userNumber) {
  
} else if (userNumber === 1) {
  if (randomNumber === 2) {
    alert("Ты проиграл! Ножницы - Камень!");
  } else {
    alert("Ты выиграл! Ножницы - Бумага!");
  }
} else if (userNumber === 2) {
  if (randomNumber === 1) {
    alert("Ты выиграл! Камень - Ножницы!");
  } else {
    alert("Ты проиграл! Камень - Бумага!");
  }
} else {
  if (randomNumber === 1) {
    alert("Ты проиграл! Бумага - Ножницы!");
  } else {
    alert("Ты выиграл! Бумага - Камень!");
  }
}
