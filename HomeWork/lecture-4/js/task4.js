function getCounter() {
  let i = 0;
  
  return function increment() {
    i++
    return i
  }
}

const counter = getCounter();
counter()
counter()
counter()
alert(counter())