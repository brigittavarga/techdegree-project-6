const qwerty = document.getElementById("qwerty");
const phrase = document.querySelector("#phrase ul");
const buttonReset = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
const hearts = document.querySelectorAll(".tries img");

// Creating an extra h3 element and adding it to #overlay 
const gamblePhrase = document.createElement("H3");  
gamblePhrase.innerHTML = "What is life if not a gamble?";  
overlay.appendChild(gamblePhrase);  
gamblePhrase.style.fontWeight = 100;
gamblePhrase.style.textTransform = "uppercase";
gamblePhrase.style.letterSpacing = "6px";

// Keep track of the number of guesses the player has missed 
let missed = 0;

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
    resetGame();
});

function getRandomPhraseAsArray(arr) {
    // Returns a random phrase from the phrases stored in the array
    let randomPhrase = arr[Math.floor( Math.random() * arr.length )];
    var phraseAsArray = randomPhrase.split("");
    return phraseAsArray;
}

getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(char) {
    // looping through an array of characters
    for( let i = 0; i < char.length; i++ ) {    
        // for each character in the array create a list item & put the character inside of the list item  
        const li = document.createElement("LI");
        li.textContent = char[i];
        phrase.appendChild(li);
        if( char[i] === " " ) {    // If the character in the array is a letter and not a space....... 
            li.className = "space"; 
        } else {
            li.className = "letter";
        }
        // console.log(char[i]);
    }
}

function checkLetter(btnClicked) {
    const letters = document.querySelectorAll(".letter");
    let match = null;      // variable to store if a match is found
    for ( let i = 0; i < letters.length; i++ ) {
        if( btnClicked.textContent === letters[i].textContent.toLowerCase() ) { // if they match:
            letters[i].classList.add("show"); // add the “show” class to the li
            match = btnClicked.textContent.toLowerCase(); // store the button text in the match variable
        }
    } 
    return match;
}

qwerty.addEventListener("click", e => {
    const clickedButton = e.target;
    if(clickedButton.tagName === "BUTTON") {
        clickedButton.className = "chosen";
        clickedButton.disabled = true;
        const letterFound = checkLetter(clickedButton);
        if( letterFound === null ) {
            const hearts = document.querySelectorAll(".tries img");
            hearts[missed].src = "images/lostHeart.png";
            missed ++;
        }
    }
    checkWin();
})

function checkWin () {
    const letter = document.querySelectorAll(".letter");
    const show = document.querySelectorAll(".show");

    if ( letter.length === show.length ) { // if the length of letter & show are the same,
        overlay.classList.add("win"); // display the win overlay by adding the .win to the overlay
        const winTitle = document.querySelector("H2");
        winTitle.innerHTML = "Congratulations! You won 🎉 ";
        overlay.style.display = "flex";

        const resetButton = document.createElement("BUTTON");
        resetButton.style.innerHTML = "Start A New Game";
        body.appendChild(resetButton);
    }
    if ( missed > 4 ) { // if the missed counter is greater than 4, 
        overlay.classList.add("lose"); // add the .lose to the overlay
        const winTitle = document.querySelector("H2");
        winTitle.innerHTML = "Sorry! You lost 😿 ";
        overlay.style.display = "flex";

        
    }
}


function resetGame () {
    // reset the missed guesses to zero
    missed = 0;

    // replace the liveHeart images
    for ( let i = 0; i < hearts.length; i++ ) {
        hearts[i].src = "images/liveHeart.png"
    }

    // empty the phrase ul 
    phrase.innerHTML = "";

    // get a new phrase and add it to the ul 
    addPhraseToDisplay(getRandomPhraseAsArray(phrases));

    // enable the buttons on the keyboard 
    const chosenButton = document.querySelectorAll(".chosen");
    for ( let i = 0; i < chosenButton.length; i++ ) {
        chosenButton[i].disabled = false; 
        chosenButton[i].classList.remove("chosen"); // remove the chosen class from those buttons 
    }
}

