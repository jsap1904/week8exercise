// for(var i =0; i<=100; i+=5)
// 	console.log([i]);

// function getInfo() {

// var username = document.getElementById("username").value
// var password = document.getElementById("password").value
// console.log("you're username is "+ username + " and your password is " + password)
// }

var houseObject = []
houseObject[0] = {
	location: "sd",
	stories: "two",
	age: 1990,
	house1: new Image(),
	src: "img/house1.jpg"
},
houseObject[1] = {
	location: "sf",
	stories: "two",
	age: 1995 ,
	house1: new Image(),
	src: "img/house2.jpg"
},
houseObject[2] = {
	location: "la",
	stories: "two",
	age: 2000,
	house2: new Image(),
	src: "img/house3.jpg"
}

for(i=0; i < houseObject.length; i++) {
	
document.write("<img src=" + houseObject[i].src  + " width='160' height='120'>" + houseObject[i].location + "," + houseObject[i].stories + "," + houseObject[i].age );	
}
