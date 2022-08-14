const defaultArray = [
  {width: 10, height: 20},
  {width: 12, height: 26},
  {width: 14, height: 50},
  {width: 6, height: 11}
];

const totalValue = defaultArray.reduce((prev, item) => ({
  widthTotal: prev.widthTotal + item.width,
  heightTotal: prev.heightTotal + item.height,
  space: prev.space + (item.width * item.height),
  quantity: prev.quantity + 1
}), {
  widthTotal: 0,
  heightTotal: 0,
  space: 0,
  quantity: 0
});

console.log(totalValue);
