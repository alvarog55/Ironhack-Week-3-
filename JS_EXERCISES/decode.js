
var words;

words = [
	"dead",
	"bygone",
	"landing",
	"cheaply",
	"assumed",
	"incorrectly",
	"attention",
	"agent"
];



function decode(words) {
	var index = 0;
	var secretMessage = "";

	for (var i=0; i<words.length; i++) {
		var word = words [i];
		var charIndex = i % 5; 
		var letter = word. charAt(charIndex);
		secretMessage += letter;
	
	}
	return secretMessage
}


module.exports = decode;
