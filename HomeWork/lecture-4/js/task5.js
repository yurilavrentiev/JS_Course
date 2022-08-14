function getMaxValue(param1, param2) {
  // param1 > param2 ? return param1 : return param2
  if (param1 > param2) {
    return param1;
  } else {
    return param2;
  }
}

function testFunction(func, a, b) {
  return func(a,b);
}

alert(testFunction(getMaxValue, 100, 20));