const someArray = [];

function filterString (string, ignoreLetters) {
  return someArray.filter.call(string, ((item) => !ignoreLetters.includes(item))).join('');
};

console.log(filterString('hello', ['e', 'o']));
