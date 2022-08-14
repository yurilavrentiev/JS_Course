function longestString(arr) {
  let longestStr = arr[0];
  for (let i = 0; arr.length > i; i++) {
    if (longestStr.length < arr[i].length) {
      longestStr = arr[i];
    }
  }
  return longestStr;
}
const randomWords = ["кот", "енот", "бегемот", "олег", "азбест", "кулебяка", "расстегай", "колбаска"];
alert("Самое длинное слово в данном массиве: "  + longestString(randomWords));
