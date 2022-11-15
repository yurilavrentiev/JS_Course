// Используя ресурс https://jsonplaceholder.typicode.com/

// Написать функцию getDataWithLogs()
// Эта функция должна делать запрос на какой то URL и возвращать полученные с него данные.
// Так же она должна показывать в консоль следующие сообщения с информаией:
// Запрос на ендпоинт "какой/то/урл" был отправлен
// Ответ был получен
// Длительность запроса составила {посчитанное время}

// Сделайте запрос на /users. Только так чтобы вернулся 1 конкретный пользователь. там есть примеры.

// Потом получите посты для этого юзера

// Потом получите коментарии которые были оставленны для этого поста

// Потом расширьте обьекты постов, добавив в них свойство comments(array of comments) Соответсвенно к каждому посту должны быть добавленны коментарии которые относятся к этому посту

// Потом рассширьте обьект юзера добавив туда массив постов.

// Покажите в консоль финальный результа
// Сделайте две версии. Одна используя promise. Вторая используя async await







function getDataWithLogs (urlAddress) {

  console.log(`Request for address ${urlAddress} has been sent!`);

  const timeStart = new Date().getTime();

  const resultData = fetch(urlAddress).then((response) => {
    console.log('Response fulfilled');
    console.log(`Request fulfilled in: ${new Date().getTime() - timeStart} ms`);
    return response
  });

  return resultData;
}

let userPosts;
let userComments;
let userData;

getDataWithLogs('https://jsonplaceholder.typicode.com/users/2')
.then((res) => res.json())
.then((res) => userData = res)
.then(() => fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
.then((res) => res.json())
.then((res) => {
  userPosts = res
  // console.log(userPosts)
}))
.then(() => fetch('https://jsonplaceholder.typicode.com/comments?postId=11&postId=12&postId=13&postId=14&postId=15&postId=16&postId=17&postId=18&postId=19&postId=20')
.then((res) => res.json())
.then((res) => {
  userComments = res
  // console.log(userComments)
}))
.then(() => {
  userPosts.forEach(element => {
    element.comments = userComments.filter(item => item.postId === element.id)
    })
    return userPosts
})
.then((res) => {
  userData.posts = res;
  console.log(userData)
})
