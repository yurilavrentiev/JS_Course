// function multiply(a,b) {
//    return (a * b);
// }
// const numbersArray = [1,2,3,4,5,6,7];
// for (let i = 0; numbersArray.length > i; i++) {
//    alert(multiply(numbersArray[i], i));
// }

const multiply = (a, b) => a * b;
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbersArray.forEach((element, index) => console.log(multiply(element, index)));
