// 8. клонировать объект
const userBob = {
	name: 'Bob',
	age: 21,
	gender: 'male',
	married: false,
	pets: [{name: 'Rex', age:10}, {name: 'Ron', age: 3}],
	breaks: ['11:00', '17:00'],
	favoriteMovie: {
		name: 'Avatar',
		year: 2009,
		info: {
			country: 'USA',
			director: 'James Cameron'
		}
	}
};
// циклом удалить все свойства объекта черех obk[]





const userBobClone = {
  ...userBob,
  pets: [{...userBob['pets'][0]},
  {...userBob['pets'][1]}],
  favoriteMovie: {...userBob.favoriteMovie,
  info: {...userBob['favoriteMovie']['info']}}};

for (prop in userBobClone) {
  delete userBobClone[prop];
}

console.log(userBobClone, userBob);
