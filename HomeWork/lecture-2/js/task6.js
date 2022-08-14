function createArray() {
    const numbersArray = [];
    for (let i = 0; i !== 1; i++) {
        const result = prompt("Вводи числа и я посчитаю их сумму!");
        if (result !== null) {
            if (isNaN(+result)) {
                alert("Вы ввели неверное значение! Используй только цифры!");
            } else {
                numbersArray.push(+result)
            }i--
        } 
    } return numbersArray;
}
function getNumberSum(arr) {
    let sum = 0;
    for (let i = 0; arr.length > i; i++) {
        sum = sum + arr[i];
    } return sum
}
const valuesArray = createArray();
alert("Сумма чисел, которые Вы ввели: " + getNumberSum(valuesArray));
