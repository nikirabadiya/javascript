// Dates

let myDate = new Date();
// console.log(myDate); // 2025-06-10T12:00:09.872Z
// console.log(myDate.toString()); // Tue Jun 10 2025 17:30:09 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Tue Jun 10 2025
// console.log(myDate.toTimeString()); // 17:30:09 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString()); // 6/10/2025
// console.log(myDate.toLocaleTimeString()); // 5:30:09 PM
// console.log(myDate.toLocaleString()); // 6/10/2025, 5:30:09 PM
// console.log(myDate.toISOString()); // 2025-06-10T12:00:09.872Z
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23); // 1/23/2023, 12:00:00 AM
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14"); // 1/14/2023, 5:30:00 AM
let myCreatedDate = new Date("01-14-2023"); // 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1749557001287
// console.log(myCreatedDate.getTime()); // 1673634600000
// console.log(Math.floor(Date.now() / 1000)); // 1749557001

let newDate = new Date();
// console.log(newDate.getDate()); // 10
// console.log(newDate.getMonth() + 1); // 6
// console.log(newDate.getDay()); // 2

newDate.toLocaleString("default", {
	weekday: "long",
});
