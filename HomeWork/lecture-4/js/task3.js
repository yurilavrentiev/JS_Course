function getFunction(callback) {
  return callback;
}

function someFunction(value1, value2) {
  return value1 + value2;
}

const funk1 = getFunction(someFunction);
alert (funk1(10,20));
