// 2. написать структуру данных очередь


const Queue = () => {

  const data = [];

  function add(element) {
    data.push(element);
  }

  function remove() {
    data.shift();
  }
  function getData() {
    return [...data];
  }
  return {
    add, remove, getData
  }
}

const queue = Queue();

queue.add('function1');
queue.add('function2');
queue.add('function3');
queue.add('function4');
queue.add('function5');
console.log(queue.getData());
queue.remove();
queue.remove();
console.log(queue.getData());
