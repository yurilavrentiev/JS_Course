let userData;
let userPosts;
let userComments;

async function getDataWithLogs() {
  const responseUser= await fetch('https://jsonplaceholder.typicode.com/users/2');
  userData = await responseUser.json();

  const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2');
  userPosts = await responsePosts.json();

  const responseComments = await fetch('https://jsonplaceholder.typicode.com/comments?postId=11&postId=12&postId=13&postId=14&postId=15&postId=16&postId=17&postId=18&postId=19&postId=20');
  userComments = await responseComments.json();

  userPosts.forEach(element => {
    element.comments = userComments.filter(item => item.postId === element.id)
  });
  userData.posts = [...userPosts];
  
  console.log(userData)
}

getDataWithLogs();
