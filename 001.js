// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const a = [];

function findAnswer(number){
	if (number === 0){return 1;}
	if (number % 3 === 0 || number % 5 === 0){
		a.push(number);
	}
	return findAnswer(number - 1);
}
findAnswer(999, a);
a.reduce((a, cv) => a + cv )
console.log(a.reduce((a, cv) => a + cv ));
