function getCalculator() {
 let result = 0;

  return {
    getResult: function() {
      return result;
    },
    plus: function(value) {
     result += value;
    },
    minus: function(value) {
     result -= value;
    },
    multiply: function(value) {
     result *= value;
    },
    divide: function(value) {
      result /= value;
    }
  } 
}
const calculator = getCalculator();
calculator.plus(10);
calculator.multiply(60)
alert(calculator.getResult())