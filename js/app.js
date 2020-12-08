const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const buttonReset = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");


// Creating an extra h3 element and adding it to #overlay 
const gamblePhrase = document.createElement("H3");  
gamblePhrase.innerHTML = "What is life if not a gamble?";  
overlay.appendChild(gamblePhrase);  
gamblePhrase.style.fontWeight = 100;
gamblePhrase.style.textTransform = "uppercase";
gamblePhrase.style.letterSpacing = "9.5px";

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

function getRandomPhraseAsArray(arr) {
    // Returns a random phrase from the phrases stored in the array
    let randomPhrase = arr[Math.floor( Math.random() * arr.length )];
    var phraseAsArray = randomPhrase.split("");
    return phraseAsArray;
}

getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(char) {
    // loops through an array of characters
    for( let i = 0; i < char.length; i++ ) {    
        // for each character in the array create a list item & put the character inside of the list item  
        let li = char[i].createElement("LI");
        // append that list item to the #phrase ul in your HTML
        phrase.appendChild(li);
        if( char  ) {    // If the character in the array is a letter and not a space....... 
            li.className = "letter";  // .... the function should add the class “letter” to the list item
        }
    }
}


function checkLetter(btnClicked) {
    const li = document.querySelector("li");
    const match = 0;      // variable to store if a match is found

    for ( let i = 0; i < li.length; i++ ) {
        if( btnClicked === li[i] ) { // if they match:
            li.className = "show"; // add the “show” class to the li
            match = btnClicked.textContent; // store the button text in the match variable
        }
        return match;
    }   
}