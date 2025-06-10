/* 

Two memory types:

Stack Memory --> Primitive datatypes
   - It will give the copy of the value - meaning the change in the new variable will not change anything in origianl varialble or element e.g. string or number varialbles

Heap Memory --> Non-Primitive datatype
   - It will give the reference of the value - meaning the change in the new variable will also change the value in origianl varialble or element e.g. objects or functions

*/

let channelName = "test";
let anotherName = channelName;
anotherName = "new";

console.log(channelName); // test
console.log(anotherName); // New

/*
Now we tried to change the value of anotherName which is copy of channelName, but because this datatype uses stack memory, so when we copy the channelName to another var - anotherName, it will give us another copy memory independently, so whatever we will change in the anotherName, it will not affect the original element - channelName
*/

let userOne = {
	email: "test@gmail.com",
	upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "test@google.com";

console.log(userOne.email); // test@google.com
console.log(userTwo.email); // test@google.com

/*
Now here what happens, we gave the values to userOne, and also made a another variable from the userOne. Now object is non-primitive datatype, that's why it will use heap memory data type, and both variable will use the reference of the same object. That's why when we change the userTwo's value, it will also change the value in the original object.
*/

/*
For more understanding, check the memory-diagram.png image
*/
