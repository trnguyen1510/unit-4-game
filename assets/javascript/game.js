let numWin = 0;
let numLose = 0;

let myScore = 0;
$("#my-score").text(myScore);
$("#win-point").text(numWin);
$("#lose-point").text(numLose);


let gem1Value = Math.ceil(Math.random() * 12);
let gem2Value = Math.ceil(Math.random() * 12);
let gem3Value = Math.ceil(Math.random() * 12);
let gem4Value = Math.ceil(Math.random() * 12);

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
	calculateGameScore();
	myScore = 0; 
	$("#game-score").text(gameScore);
	$("#my-score").text(myScore);
	$("#1").attr("data-crystalvalue", gem1Value);
	$("#2").attr("data-crystalvalue", gem2Value);
	$("#3").attr("data-crystalvalue", gem3Value);
	$("#4").attr("data-crystalvalue", gem4Value);
	$("#win-point").text(numWin);
	$("#lose-point").text(numLose);
	
}

function win() {
    numWin++;
    $("#win-point").text(numWin);
}

function lose() {
    numLose++;
    $("#lose-point").text(numLose);
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

$( ".reset-game" ).click(function() {
	resetGame();
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
