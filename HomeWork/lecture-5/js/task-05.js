// № 5
// const arr = [1, 2, 3, 4, 5]
// const result = arr.slice(0,2)
// const result1 = arr.slice(2,4)
// const result2 = arr.slice(4,5)
// const result3 = `[[${result}], [${result1}], [${result2}]]`
// console.log(result)
// console.log(result1)
// console.log(result2)
// console.log(result3)


const arr = [1, 2, 3, 4, 5]
const result = arr.reduce (() => `[${arr.slice(0,2)}]  [${arr.slice(2,4)}]  [${arr.slice(4,5)}]` )
console.log (result)
