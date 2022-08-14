// let tenToThirty = 10;
// let fortyToFifty = 40;
// let firstResult = '';
// let secondResult = '';

// do {
//   firstResult += `${tenToThirty}<br>`;
//   tenToThirty += 1;
// } while (+tenToThirty < 31);

// do {
//   secondResult += `${fortyToFifty}<br>`;
//   fortyToFifty += 1;
// } while (+fortyToFifty < 51);

// document.write(firstResult, secondResult);

let result = '';
for (let i = 10; i <= 50; i++) {
  if (i > 30 && i < 40) {
    continue;
  }
  result += i + '<br>';
}
document.write(result);
