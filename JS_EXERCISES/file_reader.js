var fs = require('fs')

function print (error, content) {
	if (error) {
		console.log('Oh no! Error!', error);
	} else {
		console.log('Success!', content);
		split(content);
	}
}

fs.readFile('file.txt', 'utf8', print)

function split(text){
	text2 = text.split("\n") 
	for (i=0; i<text2.length; i++){
		console.log("Line " + (i+1) + " " + text2[i]);
	}
}

