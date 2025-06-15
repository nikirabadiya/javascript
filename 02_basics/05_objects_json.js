const course = {
	courseName: "JS in hindi",
	price: 999,
	courseInstructor: "Hitesh",
};

// console.log(course.courseInstructor); // Hitesh // normal way to access the objects

// Destructure the object
// const {} = course // to destructure the object

// const { courseInstructor } = course; // easy way to access any value from that object to avoid course. syntax everytime we want to access the value
// console.log(courseInstructor); // Hitesh

const { courseInstructor: instructor } = course; // we can give a alternet name of the object key for easy access

// console.log(instructor); // Hitesh

// JSON
// {
//   'name': 'Hitesh',
//   'courseName': 'JS in Hindi',
//   'price': 'free',
// }
