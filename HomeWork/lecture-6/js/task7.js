// 7. преобразуйте массив users в JSON (поиграйтесь с 3им параметром space) передайте значение в переменную и выведите на экран

const users = [
	{ name: 'Bob', age: 20 },
	{ name: 'Sam', age: 10 },
	{ name: 'Anna', age: 29 },
	{ name: 'Jim', age: 15 },
	{ name: 'Alex', age: 45 },
	{ name: 'Mick', age: 23 },
];

console.log(JSON.stringify(users, null, 5));
