const valuesObject = {
  name: 'Yuri',
  age: 38,
  email: undefined,
  phone: null,
  violation: false,
  clothSize: [1,2,3,4,5],
  editions: {},
  funk: function(){},
  shoeSize: NaN,
  lastName: 'Lavrentiev',
}
function objectValueType(object) {
  let functionResult = '';
  for (prop in object)
  if (object[prop] === null) {
    functionResult += `Свойство ${prop} имеет значение: ${object[prop]} и его тип: null\n`;
  } else if (Array.isArray(object[prop])) {
    functionResult += `Свойство ${prop} имеет значение: ${object[prop]} и его тип: array\n`;
  } else {
  functionResult += `Свойство ${prop} имеет значение: ${object[prop]} и его тип: ${typeof(object[prop])}\n`;
  }
  return functionResult;
  
}
alert(objectValueType(valuesObject));
