
// const removeMatchElements = (arr) => arr.reduce((result, item) => {
  //   const value = typeof item === 'string' 
  //     ? item.toLowerCase() : item;
  //     console.log(result);
  //   return result.includes(value) ? result : [...result, value]
  // }, []);
  // console.log(removeMatchElements(defaultArray));
  
const defaultArray = [0, 1, 4, 1, 'bob', 'BOB', 'sam', 'bOb'];
const removeMatchElements = (arr) => {
  const normalize = arr.map((item) => typeof item === 'string' ? item.toLowerCase() : item );

   const object = normalize.reduce((prev, item, index) => {
   if (prev[item]) {
    prev[item].push(index)
   } else {
    prev[item] = [index];
   }
   return prev;
  },
  {});
  console.log(object);
}
removeMatchElements(defaultArray);