
// defining variables used
var wins = 0;
var losses = 0;
var guessesLeft= 15;
var guessesSoFar = [];

// setting the computer choices to an array of different letters
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess;
// setting the letter the computer chose
var letter;

        
// creating a function that runs the game
document.onkeyup = function psychic(event){
    userGuess = event.key;
    letter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // for loop that gives the user 15 tries.
    console.log(letter);
    console.log(userGuess !== letter);
    for (var i = 0; i < 15; i++){
        
        if (userGuess !== letter){
            guessesSoFar.push(userGuess);
            guessesLeft -= guessesLeft;
        } else if (guessesLeft == 0) {
            document.write("<h1>You Lose!</h1>");
            psychic(event);
        } else {
            document.write("<h1> You Win!</h1>");
            psychic(event);
        }
    }
}
    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
//     var html =
//     "<p>You chose: " + userGuess + "</p>" +
//     "<p>The computer chose: " + letter + "</p>" +
//     "<p>wins: " + wins + "</p>" +
//     "<p>losses: " + losses + "</p>" +
//     "<p>ties: " + ties + "</p>";

//   // Set the inner HTML contents of the #game div to our html string
//   document.querySelector("#game").innerHTML = html;