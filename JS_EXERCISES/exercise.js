function eat (food) {
	if (food === "Pizza") {
		console.log("Yay " + food)
	}
	else if(food === "Cookies"){
	console.log("Cookies are good too");
	}
	else if(food === "Brussel Sprouts"){
	console.log("Ok, enjoy eating " + food);
	}
	else {
	console.log("Sorry, we have not " + food);
	}
}

var i;
for (i=1; i<=5; i+=1){
	console.log(i);
}


var count = 1;

while (count <= 5) {
	console.log(count);
	count++;
}

var nums =[1,2,3,4];
function doubles(x) {
	return x * 2;
}
var nums2 = nums.map(doubles);
console.log(nums2);

var foods = ["pizza", "cookies", "bread"];
foods.forEach(function (food) {
	console.log(food)
});

var foods = ["pizza", "cookies", "bread"];
var capsFoods = foods.map(function (food) {
	return food.toUpperCase();
});

console.log(capsFoods)

var a = [1,2,3];
var a2 = multArray(a, 4);

console.log(a2);

function multArray(arr,num) {

	function f(x) {
	return x * num;
	}
	var arr2 = arr.map(f);

return arr2
}


eat(process.argv[3])
eat("Cookies")
eat("Brussel Sprouts")
eat("Hamburgers")

console.log(process.argv)

var a = [1,2,3];
function myLog(x) {
	console.log(x + "!!");
}
myForEach(a, myLog);

function myForEach(arr, func) {
	for (var i=0; i<arr.length; i++) {
		func(arr[i])
	}
}

function myForEach2(arr,func) {
	arr.forEach(func);

}
myForEach2(a, myLog);


function split(numbers)




function averageColon(numbers) {
	var nums_sp = numbers.split(":");

	var nums2 = nums_sp.map(function(str) {
		return parseInt(str);
	});

	var sum = 0;
    for(var i=0; i < nums2.length ; i++) {
    	sum = sum +=nums2[i]
 	}
	var avg = sum / nums2.length;
	return avg
}

console.log(averageColon('10:20:30'));

function sumColon(numbers) {
	var nums_sp = numbers.split(":");

	var nums2 = nums_sp.map(function(str) {
		return parseInt(str);
	});

	var sum = 0;
    for(var i=0; i < nums2.length ; i++) {
    	sum = sum +=nums2[i]
 	}

 	return sum
}

console.log(sumColon('10:20:30'));

function maxColon(numbers) {
	var nums_sp = numbers.split(":");

	var nums2 = nums_sp.map(function(str) {
		return parseInt(str);
	});

	var max = nums2[0];

	for (var i = 1; i < nums2.length; i++) {
    	if (nums2[i] > max) {
      		max = nums2[i];
    	}
    }
    return max
}	

console.log(maxColon('10:20:30'));





