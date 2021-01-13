function combineNames(firstName, lastName) {
	let fullName = firstName + " " + lastName;
	console.log(fullName);
}

combineNames("Bob", "Roudebush");

for (let i = 0; i <= 100; i++) {
	if (i%24 == 0) {
		console.log("Fizz Buzz");
	} else if (i%6 == 0) {
		console.log("Fizz");
	} else if (i%8 == 0) {
		console.log("Buzz");
	}
};

function findPerimeter(length, width) {
	let perimeter = (length + width)*2;
	if (perimeter > 20) {
		let result = `True: the perimeter is ${perimeter}`;
		return result;
	}
	if (perimeter < 20) {
		let result = `False: the perimeter is ${perimeter}`;
		return result;
	}
}

console.log(findPerimeter(2,5));

let library = {
	name: "Bob Roudebush",
	address: "430 N. Park Ave., Indianapolis, IN 46202",
	sections: {
		collections: [
			{
				classification: "fiction",
				count: 5,
				aisle: "aisle 1"
			},
			{
				classification: "non-fiction",
				count: 7,
				aisle: "aisle 2"
			}
		]
	}
};

console.log(library.sections.collections);

