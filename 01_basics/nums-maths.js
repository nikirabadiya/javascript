const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // makes the value beyond dot to fixed number

const otherNum = 23.8942;
// console.log(otherNum.toPrecision(3));  // Makes the value round of to given number

const theNum = 1000000;
// console.log(theNum.toLocaleString("en-IN")); // makes the value understandable

/********************** Maths **********************/
// console.log(Math);
// console.log(Math.abs(-4)); // Changes the value into positive only
// console.log(Math.round(4.3)); // Changes the value into integer only and round of
// console.log(Math.ceil(4.3)); // Changes the value into integer only and top value of the given value, i.e - 4.1 or 4.9 hoga to 5 hi lega,
// console.log(Math.floor(4.3)); // Changes the value into integer only and lower value of the given value, i.e - 4.1 or 4.9 hoga to 4 hi lega,
// console.log(Math.min(4, 6, 9, 2));
// console.log(Math.max(4, 6, 9, 2));

// console.log(Math.random()); // will give you value always 0 to 1 but randomly

// console.log(Math.random() * 10 + 1); // adding 1 to avoid getting 0 as min value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
