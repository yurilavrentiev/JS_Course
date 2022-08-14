// 4. обработать все при помощи асинхронной функции async await

function getPromise() {
  console.log('Getting data: in progress...')

  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const chance = Math.random();
      if (chance < 0.70) {
      resolve({
        name: 'Yuri',
        age: 38,
        gender: 'male',
        married: true,
        pet: 'none'
        })
      }
      reject('Can not reach server');
    
    }, 3000)
  )
}

async function getData() {
  try {
    const data = await getPromise();
    console.log('Data received:', data);
  } catch(err) {
    console.log('Error>>>', err);
  }
}

getData();