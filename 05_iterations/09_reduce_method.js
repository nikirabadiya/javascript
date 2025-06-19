const myNums = [1, 2, 3];

const myTotal = myNums.reduce((acc, curVal) => {
	// console.log(acc, curVal);
	return acc + curVal;
}, 0);

// console.log(myTotal);

const shoppingCart = [
	{
		itemName: "JS course",
		price: 2999,
	},
	{
		itemName: "Python course",
		price: 999,
	},
	{
		itemName: "Mobile Dev course",
		price: 5999,
	},
	{
		itemName: "Data Science course",
		price: 12999,
	},
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
