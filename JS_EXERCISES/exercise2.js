
function shout () {
	console.log('sorry, any problem!');
}

setTimeout (shout, 1000);

console.log('ahhhhhhhhhhhh!')

function blastOff(count) {
	var currentCount = count;

	function callback() {
		if (currentCount === 0){
			console.log('Blast off!');
		} else {
			console.log(currentCount);
			currentCount -= 1;
			setTimeout (callback, 2000);
		}
		
	}
	setTimeout (callback, 2000);
}
blastOff(5)
