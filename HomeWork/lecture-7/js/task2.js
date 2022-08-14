function longestString (array, index = 0, result = '') {
  if (index === array.length) {
    let longestStringArray = [];
    for (value of array) {
      if (value.length === result.length) {
        longestStringArray.push(value);
      }
    }
    return longestStringArray.length === 1 ? result : longestStringArray;
  } 
  if (array[index].length > result.length)
   result = array[index];
   return longestString(array, index + 1, result)
}

const stringArray = ['aaa', 'bbbbbb', 'ccccc', 'ddddd', 'ggggg'];
console.log(longestString(stringArray));