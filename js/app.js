const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const buttonReset = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");

// Keep track of the number of guesses the player has missed 
const missed = 0;

// Store phrases in an array
const phrases = [
    "The secret of getting ahead is getting started",
    "You did not come this far to only come this far",
    "Your limitation is only in your imagination",
    "Learn as if you will live forever and live like you will die tomorrow",
    "It always seems impossible until it is done"
];

// Hide overlay on the reset button
buttonReset.addEventListener("click", () => {
    overlay.style.display = "none";
});

function getRandomPhraseAsArray(arr, ) {
    // Returns a random phrase from the phrases stored in the array
    let randomNumber = Math.floor( Math.random() * arr.length );
    return randomNumber;
}