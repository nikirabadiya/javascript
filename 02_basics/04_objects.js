// const tinderUser = new Object(); // Sigleton
const tinderUser = {}; // Non-singleton

/* 
Both will give the same result but the 1st one is singleton object where 2nd one is not
*/

// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoogedIn = false;

// console.log(tinderUser); //{ id: '123abc', name: 'Sam', isLoogedIn: false }

const regularUser = {
	email: "some@gmail.com",
	fullName: {
		userFullName: {
			firstName: "Nikita",
			lastName: "Patel",
		},
	},
};

// console.log(regularUser.fullName); // { userFullName: { firstName: 'Nikita', lastName: 'Patel' } }
// console.log(regularUser.fullName.userFullName); // { firstName: 'Nikita', lastName: 'Patel' }
// console.log(regularUser.fullName.userFullName.firstName); // Nikita

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 }; // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// To combine two or more onjects
// const obj3 = Object.assign(obj1, obj2); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({}, obj1, obj2); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
/*

Both will give same results, but including {} will act as a taget and other will act as sources so the new object will become a new one, in other example, obj1 will act as a target object and its value will be changed too which sometimes we don't want

So it is ADVISABLE to use {} is starting if we use assign to concat the objects so that any existing object does not act as a target otherwise it will change the value of that object

*/

// another way to concat the objects, as we do for the array
const obj3 = { ...obj1, ...obj2 }; // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// console.log(obj3);

const users = [
	{
		id: 1,
		email: "t@gmail.com",
	},
	{
		id: 2,
		email: "t@gmail.com",
	},
];

// console.log(users[0].email); // t@gmail.com

// console.log(tinderUser); // { id: '123abc', name: 'Sam', isLoogedIn: false }

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoogedIn' ] // it will return the array of the key of expected object

// console.log(Object.values(tinderUser)); // [ '123abc', 'Sam', false ]

// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoogedIn', false ] ] // it will give the whole object as an array

// console.log(tinderUser.hasOwnProperty("isLoogedIn")); // true // to check if the property is available or not
