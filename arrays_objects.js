/*

Kayla Diniega
Arrays and Objects
Dec. 5, 2016

*/


//variables
//arrays
var numbers = [1,2,3,4,5,6,7,8,9,10];
var names = ["Senior Tan", "Zakattak", "Yolo Baggin", "Ohai", "Basic Jeff"];
var colors = ["light black", "blue", "red"];
var adj = ["smart", "Special case", "yummy", "tiny whiny", "scared"];
var slang = ["scrap", "kobe beef", "da kine", "li day", "pau hana"];

//objects

var doughnut = {
	toppings : ["spinkle","chocolate frosting", "o'hare air"],
	fillings : "Custard";
	shape : "square";
	count : 12
}

// Progression part 2

function candyShop(p1) {
	console.log(p1[9] + x[4]);
}

candyShop(numbers);

function sleep(p2){
	for (i = 0; i <= p2.legnth; i++) {
		console.log("What would you want from" + p2[i]);
	}
}

sleep (doughnut.toppings);

function satisfaction(p3) {
	if (p3 == doughnut.fillings[2]) {
		console.log("This is so good. Like to die for good!");
	} else {
		console.log("This doesn't taste that great. The " + doughnut.toppings + " looks stale and crusty!");
	}
}

satisfaction (doughnut.toppings[4]); 