const defaultArray = [1, 5, 'hello', 'yuri', 10 , 20];

function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1) + min);
}

const randomElement = (arr) => arr[getRandomNumber(0, arr.length - 1)];
console.log(randomElement(defaultArray));
