// const tinderUser = new Object(); // singleton object
const tinderUser = {}; // non-singleton object

tinderUser.id = "123abd";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
	email: "test@gmail.com",
	fullName: {
		userFullName: {
			firstName: "Test",
			lastName: "Some",
		},
	},
};

// console.log(regularUser.fullName?.userFullName.firstName);

const obj1 = {
	1: "a",
	2: "b",
};

const obj2 = {
	3: "c",
	4: "d",
};

const obj3 = { obj1, obj2 };
// console.log(obj3); // {obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd'}}

// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4); // {'1': 'a', '2': 'b', '3': 'c', '4': 'd'}

const obj5 = { ...obj1, ...obj2 }; // same as array join method and mostly used method to join objects and arrays
// console.log(obj5); // {'1': 'a', '2': 'b', '3': 'c', '4': 'd'}

const users = [
	{
		id: 1,
		email: "h@gmail.com",
	},
	{
		id: 2,
		email: "h@gmail.com",
	},
];

// console.log(users[0].email);
// console.log(tinderUser); // { id: '123abd', name: 'Sam', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); // very important operation to be used in future projects // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abd', 'Sam', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abd' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true

const course = {
	courseName: "jsHindi",
	coursePrice: "999",
	courseInstructor: "Hitesh",
};

// course.courseInstructor;

// const { courseInstructor } = course; // Destructuring the object so that if we want courseInstructor value multiple times then we can avoid course.courseInstructor every time and it will look clean and neat
// console.log(courseInstructor);

const { courseInstructor: instructor } = course; // we can change the value name according to our requirements and ease
console.log(instructor);

// json api example
// {
// 	'name': 'test',
// 	'course': 'JS',
// 	'price': 'free'
// }
