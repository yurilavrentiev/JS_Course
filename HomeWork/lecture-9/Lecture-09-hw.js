// 1. написать функцию waitSync при помощи рекурсии
// 2. написать структуру данных очередь
// 3. написать промис которые с 70 процентной вероятность будет возвращать объект {name: 'Bob', age: 25, gender: 'male', ...} придумайте еще поля , и с 30 процентно будет throw Error() (почитать что такое throw Error)внутри промиса сделайте таймер чтобы имитировать запрос на сервер, при отправке запроса выводим в консоль лог loader - true потом обрабатываем объект минимум 5ью then (пример вывести имя в консоль) и обрабатываем ошибку, выведите в консоль свойства объекта Error и после всей обработке выводим в консоль done и loader - false
// 4. обработать все при помощи асинхронной функции async await
// 5. разобраться почему в консоль выводятся значения в такой последовательности
// console.log(1)
// function fu () {
// 	console.log(2)
// }
// promise = new Promise(function (res, rej) {
// 	console.log(3)
// 	res()
// })
// setTimeout(() =>console.log(11), 0)
// Promise.resolve().then(() => console.log(4)).finally(() => console.log(5))

// promise.then(() => console.log(6)).then(() => console.log(7)).then(() => console.log(8)).finally(() => console.log(9))

// setTimeout(() =>console.log(12), 0)
// setTimeout(() =>console.log(13), 10)
// fu()
// console.log(10)
// fu()

// теория микро и макро таски async await запись
// http://latentflip.com/loupe/
