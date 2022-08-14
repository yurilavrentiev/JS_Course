let number = 0;
let result = '0<br>';
do {
  number += 1;
  if (number % 2 !== 0) {
    continue;
    } 
  result += `${number}<br>`;
  } while (number < 101);

document.write(result);
