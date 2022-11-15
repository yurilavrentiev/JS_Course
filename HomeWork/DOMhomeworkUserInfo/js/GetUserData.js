function getUserData() {
  const buttonName = this.innerText;
  this.innerText = 'Loading...';
  this.disabled = true;
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => res.json())
  .then((res) => {
    res.toString = convertToString
    const div = document.createElement('div')
    div.innerHTML = res.toString()
    div.classList.add('text')
    document.body.appendChild(div)
    return res.id
   })
   .then((userId) => {
    createButton('Get Posts', 'btnPosts', 'btn')
    const button2 = document.getElementById('btnPosts');
    button2.addEventListener('click', getUserPosts.bind(button2, userId));
  })
  .catch((err) => {
    console.error('ERROR>>', err);
    this.disabled = false;
  })
  .finally(() => {
    this.innerText = buttonName;
  })
}

function getUserPosts(userId) {
  const buttonName = this.innerText;
  this.innerText = 'Loading...';
  this.disabled = true;
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then((res) => res.json())
  .then((res) => {
    const div = document.createElement('div');
    div.classList.add('text');
    res.forEach((obj) => {
      obj.toString = convertToString;
      div.innerHTML += obj.toString();
      document.body.appendChild(div);
    })
  })
  .then(() => {
    createButton('Get Comments', 'btnComment', 'btn')
    const button2 = document.getElementById('btnComment');
    button2.addEventListener('click', getUserComments);
  })
  .catch((err) => {
    console.error('ERROR>>', err);
    this.disabled = false;
  })
  .finally(() => {
    this.innerText = buttonName;
  })
}

function getUserComments () {
  const buttonName = this.innerText;
  this.innerText = 'Loading...';
  this.disabled = true;
  for (let i = 1; i <= 10; i++) {
  fetch(`https://jsonplaceholder.typicode.com/post/${i}/comments`)
  .then((res) => res.json())
  .then((res) => {
    const div = document.createElement('div');
    div.classList.add('text');
    res.forEach((obj) => {
      obj.toString = convertToString;
      div.innerHTML += obj.toString();
      document.body.appendChild(div);
      })
    })
    .catch((err) => {
      console.error('ERROR>>', err);
      this.disabled = false;
    })
    .finally(() => {
      this.innerText = buttonName;
    })
  }
  
}

function convertToString (childObj) {
  let result = '';
  const obj = childObj || this;
  for (prop in obj) {
    if (prop === 'toString') {
      continue;
    }
    if (typeof obj[prop] === 'object') {
      result += `<b>${prop.toUpperCase()}</b>: ${convertToString(obj[prop])}`
      continue
    }
    result += `<b>${prop.toUpperCase()}</b>: ${obj[prop]}${childObj ? ', ' : '<br>'}`;
  }
  return result
}

function createButton(btnName, btnId, btnClass) {
  const root = document.querySelector('.block');
  const newButton = document.createElement('button');
  newButton.innerText = btnName;
  newButton.classList.add(btnClass);
  newButton.id = btnId;
  root.appendChild(newButton)
  return newButton
}


const button = createButton('Get User', 'button', 'btn');;
button.addEventListener('click', getUserData);


