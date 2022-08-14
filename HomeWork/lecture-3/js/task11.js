const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'];
const result = [];
const date = new Date();
const currentDate = date.getDay()
console.log(currentDate);
for (day of daysOfWeek) {
  if (day == 'sun' || day == 'sat') {
    result.push(day.toUpperCase());
    continue;
  }
result.push(day);
}
for (day of result) {
  if (result.indexOf(day) === currentDate){
    result[currentDate] = `(${day})`;
  }
}
alert(result);
