// 3. написать промис которые с 70 процентной вероятность будет возвращать объект {name: 'Bob', age: 25, gender: 'male', ...} придумайте еще поля , и с 30 процентно будет throw Error() (почитать что такое throw Error)внутри промиса сделайте таймер чтобы имитировать запрос на сервер, при отправке запроса выводим в консоль лог loader - true потом обрабатываем объект минимум 5ью then (пример вывести имя в консоль) и обрабатываем ошибку, выведите в консоль свойства объекта Error и после всей обработке выводим в консоль done и loader - false


function forPromise(success, fail) {

  console.log('Getting data: in progress...')

  setTimeout(() => {
    const chance = Math.random();
    if (chance < 0.70) {
      success({
        name: 'Yuri',
        age: 38,
        gender: 'male',
        married: true,
        pet: 'none'
      })
    }
      fail('Can not reach server');
    
  }, 5000)
}

const promise = new Promise(forPromise)

promise
.then((a) => {
  console.log('Data received:', a)
  return a
  }
)
.then((data) => {
  data.modified = true;
  console.log('Data has been modified', data);
  return data
  }
)
.then((data) => {
  let userInfo = '';
  for (keys in data) {
    userInfo += `\n${keys}: ${data[keys]}`
  }
  console.log('User file created', userInfo);
  return data
  }
)
.then((data) => {
  data.admin = true;
  console.log('Admin access granted', data)
  return data
})

.catch((err) => console.log('Error >>>', err))
.finally(() => console.log('Getting data: done'))
