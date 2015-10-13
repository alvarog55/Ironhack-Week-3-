var Car = function(brand){

	this.brand = brand;
	this.speed = 0;

	this.accelerate = function(increment) {
		this.speed += increment;
		
	}


	this.brake = function(decrement) {
		this.speed -= decrement;
	}

	this.printState = function() {
		console.log(this.brand + " is running at " + this.speed);
	}

}	

var car = new Car("Porsche");
var car1 = new Car("Seat");

car.accelerate(300);
car1. accelerate(145)
car.brake (150)
car1.brake(56)
car.printState();
car1.printState();

//lo mismo pero con otra forma

var Car = function(brand){

	this.brand = brand;
	this.speed = 0;
}

	Car.prototype.accelerate = function(increment) {
		this.speed += increment;
	}

	Car.prototype.brake = function(decrement) {
		this.speed -= decrement;
	}

	Car.prototype.printState = function() {
		console.log(this.brand + " is running at " + this.speed);
	}

var car = new Car("Porsche");
var car1 = new Car("Seat");

car.accelerate(300);
car1. accelerate(145)
car.brake (150)
car1.brake(56)
car.printState();
car1.printState();