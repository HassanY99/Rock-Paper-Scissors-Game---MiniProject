// ======= Dependencies ======== //

let wins = 0;
let losses = 0;
let ties = 0;

let options = ['R', 'P', 'S'];



// ======= Functions ======== //


var playGame = function() {

    // User Choice
    let userChoice = window.prompt('Choose R, P or S');

    if(!userChoice) {
        return;
    }

    userChoice = userChoice.toUpperCase();


    // Computer Choice

    let index = Math.floor(Math.random() * options.length);
    let computerChoice = options[index];

    window.alert("Computer chose: " + computerChoice);


    // Using If/Else Statements to figure out the results
    
    if(userChoice === computerChoice) {
        ties++;
        window.alert("It was a tie!"); 
    } else if(
    (userChoice === "R" && computerChoice === 'S') || 
    (userChoice === "S" && computerChoice === 'P') || 
    (userChoice === "P" && computerChoice === 'R')
    ) {
        wins++;
        window.alert("You Winn!")
    } else {
        losses++;
        window.alert('You lost!')
    }
    
    
    // Print Stats
    
    window.alert(`Stats: 
    Wins: ${wins}
    Losses: ${losses}
    Ties: ${ties}`);
    
    
    // Ask if they want to play again?
    
    var playAgain = window.confirm("Do you want to play again?");
    
    if(playAgain) {
        playGame();
    }
};


// ======= Initialization ======== //

playGame();