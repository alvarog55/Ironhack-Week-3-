var read = require('read');

var Question = function(answers, statement, position, points) {
	this.answers = answers;
	this.statement = statement;
	this.position = position;
	this.points = points;
}

var Quiz = function() {
	this.questions = [];
	this.current_location = 0; 
	this.current_score = 0;
	this.options = {
		prompt: ""
	};
}

Quiz.prototype.presentation = function() {
	console.log("Come on! Answer all questions and win a lot of Money!\n");
	console.log(this.questions[this.current_location].statement);
	this.launch();
}

Quiz.prototype.add_questions = function(question){
	this.questions.push(question)
}

Quiz.prototype.launch = function() {
	read(this.options, this.start.bind(this));
}

Quiz.prototype.start = function(err, input) {
	if  (err) {
		console.log("There was an error");
	} else {
		this.process(input);
	}
}

Quiz.prototype.process = function(input) {
	if (this.questions[this.current_location].answers === input){
		console.log("Nice!!You have won " + this.questions[this.current_location].points)
		this.current_score += this.questions[this.current_location].points
		this.current_location += 1;
		if (this.current_location === 6) {
			this.finish();
		} else console.log(this.questions[this.current_location].statement)
		this.launch();
  			
  	} else {
		this.current_score -= 5
		console.log("The answer is not correct! You lose 10 points");
		console.log("Try again");
		this.launch();
  			
  	}
}

Quiz.prototype.finish = function(input) {
	console.log("Your total score is " + this.current_score);
}

var questionary = new Quiz();

var q1 = new Question("Julius Caesar", "1. What roman general did conquere the Gaul?\n>>", 1, 25)
var q2 = new Question("Germany", "2. Where is Bremen?", 2, 10)
var q3 = new Question("Real Madrid", "3. Which football team is the best of history?∫", 3, 10)
var q4 = new Question("La Meca", "4. In wich country did born Mahoma?", 4, 50)
var q5 = new Question("Rafael", "5. Who did paint the 'Athens' School'?", 5, 50)
var q6 = new Question("Cocoa", "6. In which disco of Barcelona did Nacho get drunk more times?", 6, 200)


questionary.add_questions(q1);
questionary.add_questions(q2);
questionary.add_questions(q3);
questionary.add_questions(q4);
questionary.add_questions(q5);
questionary.add_questions(q6);

questionary.presentation();
