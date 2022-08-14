const item = 1;
const item2 = 2;
switch (true) {
  case item > item2:
    console.log('first');
    break;
  case item > 1 && item2 > 3:
    console.log('second');
    break;
  case item < 1:
  case item2 > 3:
    console.log('third');
    break;
  case item2 > 3:
    console.log('forth');
    break;
  default:
    console.log('fifth');   
}