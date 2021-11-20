// ======= Dependencies ======== //

let wins = 0;
let losses = 0;
let ties = 0;

let options = ['R', 'P', 'S'];



// ======= Functions ======== //


var playGame = function() {
    let userChoice = window.prompt('Choose R, P or S');

    if(!userChoice) {
        return;
    }

    userChoice = userChoice.toUpperCase();


    // Computer Choice

    let index = Math.floor(Math.random() * options.length);
    let computerChoice = options[index];

    window.alert("Computer chose: " + computerChoice);
}















// ======= Initialization ======== //

playGame();