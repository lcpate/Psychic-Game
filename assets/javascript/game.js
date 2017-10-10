	var wins = 0;
		var losses = 0;
		var guessesLeft = 9;
		var guessSoFar = [];
		var compGuess = null;


		var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		
		// allows the computer to randomize thier choice
		var computerInput = computerChoice[Math.floor(Math.random() * computerChoice.length)];

// FUNCTIONS=====================================================================================

// updating the wins
var updatewins = function(){
document.querySelector("#wins").innerHTML = "Wins: " + wins;
	}

// updating the losses
var updatelosses = function(){
		console.log("insideUpdatelosses");
	document.querySelector("#losses").innerHTML = "Losses: " + losses;
	}

// counting the remaining guesses
var remainingGuesses = function () {
	document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
	}

// listing the user guesses
var userguess = function () {
	document.querySelector("#userGuessSoFar").innerHTML = "Your Guesses so far: " + guessSoFar.join(", ");
	}
var updateCompGuess = function() {
  this.compGuess = this.computerChoice[Math.floor(Math.random() * this.computerChoice.length)];
};

// reset function
var reset = function () {
	guessesLeft = 9;
	guessSoFar = [];
};

	
	updateCompGuess();






// 

	document.onkeyup = function (event) {

		var userInput = String.fromCharCode(event.keyCode).toLowerCase();

		// checking that the user input was being logged
			console.log (userInput);

		guessSoFar.push(userInput);
			userguess ();
			updateCompGuess();

	if (userInput === computerInput){
		wins++;
		guessesLeft = 9;
		console.log("these are my wins " + wins);

		updatewins();

	}


	if (userInput !== computerInput) {

		guessesLeft--;
		remainingGuesses ();
	}

	if (guessesLeft <= 0) {
		losses++;
		console.log("these are my losses" + losses);
		updatelosses();
		reset ();

	}
	
	
		
};









	