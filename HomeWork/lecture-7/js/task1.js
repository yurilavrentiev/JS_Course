
function deepCloneObject (cloneToObject, defaultObject) {
  for (let keys in defaultObject) {
    if (typeof defaultObject[keys] === 'object' && defaultObject[keys] !== null && !Array.isArray(defaultObject[keys])) {
      cloneToObject[keys] = deepCloneObject({}, defaultObject[keys]);
    } else {
    cloneToObject[keys] = defaultObject[keys];
    }
  }
  return cloneToObject;
};

const userBobClone = {};
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
deepCloneObject(userBobClone, userBob)
userBobClone.pets[0].age = 5;
userBobClone.favoriteMovie.name = 'Matrix';
console.log(userBobClone, userBob);
