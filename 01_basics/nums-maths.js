const score = 400;
// console.log(score);

// Alternate way to define the number
const balance = new Number(100);
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00  // makes the value to fixed to the desired number beyond dot

const otherNum = 23.8942;
// console.log(otherNum.toPrecision(3)); // 23.9  // Makes the value round of to given number without counting the number after the dot so the total number of the character will be the given number irrespectively it having the dot or not, if it would 123.8 then it will be 124 as it is 3 digit number but it will round off the value of the given number

const theNum = 1000000;
// console.log(theNum.toLocaleString()); // 1,000,000 // makes the value understandable
// console.log(theNum.toLocaleString("en-IN")); // 10,00,000 // it makes the value understandable as per india

/********************************* MATHS *********************************/
// console.log(Math);

// console.log(Math.abs(-4)); // 4 // Changes the value into positive(absolute) only whether it is postive or negetive, it will not convert the ppsitive value to negative, it only makes the nagetive value to positive value

// console.log(Math.round(4.3)); // 4 // Changes the value into integer only and round of
// console.log(Math.round(4.7)); // 5

// console.log(Math.ceil(4.3)); // 5 // Changes the value into integer only and top value of the given value, i.e - 4.1 or 4.9 hoga to 5 hi lega
// console.log(Math.floor(4.3)); // 4 // Changes the value into integer only and lower value of the given value, i.e - 4.1 or 4.9 hoga to 4 hi lega

// console.log(Math.min(4, 6, 9, 2)); // 2
// console.log(Math.max(4, 6, 9, 2)); // 9

// console.log(Math.random()); // will give you value always between 0 to 1 but randomly

// console.log((Math.random() * 10) + 1); // to get a value between 1 to 10
// sometimes value can be there like 0.04 and even if we have added *10 it will still be 00.4 and will give us value as 0, so to avoid 0 as min value we have added 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// explanation for the above formula
/*
We have to create a random value between 10 to 20, and in console.log(Math.random() * 10 + 1) this formula we wanted to create a random value between 1 to 9 so we multiplied it by 10

So first we need proper range between we want to create a number, which we can do by max-min, so it will be 10 same as above, so formula will be like Math.random() * (max - min + 1) as 1 is to avoid 0 

Now we want only lower value, not round value so will add floor method to cut it only one integer number so formula will be Math.floor(Math.random() * (max - min + 1))

But this will give us value between 1 to 10 as we understood the formula, so because we want the value between min and max numbers, we need to add min number to the formula so that the number starts creating from the min value - so final formula will be Math.floor(Math.random() * (max - min + 1)) + min

We can check all above steps in console.log() - step by step to understand what is going on behind the screen
*/
