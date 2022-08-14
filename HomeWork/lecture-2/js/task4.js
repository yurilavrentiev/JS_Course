function arraySum(arr1, arr2) {
  let i;
  let sum1 = sum2 = 0; 
  for (i = 0; arr1.length > i; i++) {
    sum1 = sum1 + arr1[i];
  }
  for (i = 0; arr2.length > i; i++) {
    sum2 = sum2 + arr2[i];    
  }
  if (sum1 > sum2) {
    alert(`Сумма чисел первого массива больше! ${sum1} больше, чем ${sum2}`);
  } else if (sum1 < sum2) {
    alert(`Сумма чисел первого массива меньше! ${sum1} меньше, чем ${sum2}`);
  } else {
    alert(`Суммы данных массивов равны! ${sum1} равно ${sum2}!`);
  }
}
const numbersArray1 = [1,2,3,4,5,6,7,8,9];
const numbersArray2 = [2,3,4,5,6,7,8,9,10];
arraySum(numbersArray1, numbersArray2);
