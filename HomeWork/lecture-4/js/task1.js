function convertDegrees(value) {
  return value * 1.8 + 32;
}
const userValue = +prompt('Введи значение температуры в градусах Цельсия и я скажу, столько это в градусах Фаренгейта!');
isNaN(userValue) 
  ? alert('Вы ввели недопустимое значение!')
  : alert(`По шкале Фаренгейта это будет: ${convertDegrees(userValue)} градусов!`);
