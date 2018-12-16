let numWin = 0;
let numLose = 0;

let myScore = 0;
$("#my-score").text(myScore);
$("#win-point").text(numWin);
$("#lose-point").text(numLose);


let gem1Value = Math.floor(Math.random() * 10)+1;
let gem2Value = Math.floor(Math.random() * 10)+1;
let gem3Value = Math.floor(Math.random() * 10)+1;
let gem4Value = Math.floor(Math.random() * 10)+1;

function calculateGameScore() {
	let gameScore = 0;

	const random1 = Math.floor(Math.random() * 5);
	gameScore += random1 * gem1Value;
	const random2 = Math.floor(Math.random() * 5);
	gameScore += random2 * gem2Value;
	const random3 = Math.floor(Math.random() * 5);
	gameScore += random3 * gem3Value;
	const random4 = Math.floor(Math.random() * 5);
	gameScore += random4 * gem4Value;
	return gameScore;
}
let gameScore = calculateGameScore();
$("#game-score").text(gameScore);

function resetGame() {
	numWin = 0;
	numLose = 0; 
	myScore = 0;

}

function win() {
	

}

function lose() {
	
}

$( ".gem-button" ).click(function(e) {
	myScore += findValue(e.currentTarget.id);
	if (myScore > gameScore) {
		lose();
		resetGame();
	} else if (myScore == gameScore) {
		win();
		resetGame();
	}

	$("#my-score").text(myScore);
});

$( ".reset-game" ).click(function(resetGame) {
	reset();
});


function findValue(gem) {
	switch (parseInt(gem)) {
	case 1:
		return gem1Value;
	case 2:
		return gem2Value;
	case 3:
		return gem3Value;
	case 4:
		return gem4Value;
	}
}
