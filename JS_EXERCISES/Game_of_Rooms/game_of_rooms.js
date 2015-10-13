var read = require('read');



var Room = function(doors, description, object) {
	this.doors = doors;
	this.description = description;
	this.object = object;

}


var Game = function() {
	this.commands = ["N", "S", "W", "E"]
	this.rooms = [];
	this.current_location = 0;
	this.options = {
    prompt: "Where do you want to go?\n>>"
	};
}

Game.prototype.add_rooms = function(room){
	this.rooms.push(room)
}

Game.prototype.launch = function(instructions, func) {
	read(instructions, func);
}

Game.prototype.start = function(err, input) {
	if  (err) {
		console.log("There was an error");
	} else {
		this.process(input);
	}
}

Game.prototype.process = function(input) {
	if (this.current_location === 4) {
		console.log("It was time! you can call to Nacho to go to Gallito ");
	} else if (this.rooms[this.current_location].doors === input){
			this.current_location += 1
			console.log(this.rooms[this.current_location].description)
  			level.launch(level.options, level.start.bind(level));
  			
  	} else {
  			console.log("There is not exit in this direction!");
  			console.log("Try a different command");
  			level.launch(level.options, level.start.bind(level));
  			
  	}
}

var level = new Game();

var r1 = new Room("W", "You are in a cave filled with snakes.", "There is a sword")
var r2 = new Room("N", "You are in a old empty house.")
var r3 = new Room("S", "You are in a garden. There are a lot of trees and two dangerous dogs.")
var r4 = new Room("E", "You are in a beach. There is a ship. You can board and navigate.")
var r5 = new Room("W", "You have arrived to a virgin island. It's really a paradise. You can stay here during all your live")

level.add_rooms(r1);
level.add_rooms(r2);
level.add_rooms(r3);
level.add_rooms(r4);
level.add_rooms(r5);

level.launch(level.options, level.start.bind(level));
