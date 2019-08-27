//We create a variable named "message" (we use const, because we won't be changing the variable) and select the div tag with class "message" using method querySelector.
const message = document.querySelector(".message");

//We create a variable named "score" and select the div tag with class "score" using method querySelector.
const score = document.querySelector(".score");

//We create a variable "buttons" and we're using querySelectorAll, because we want to grab all of the available button tags. And as we know there are three of them and we'll be creating a node list.
const buttons = document.querySelectorAll("button");

//We create an array for the score.
let winner = [0, 0];

//Using a for loop we iterate trough all three buttons and add an addEventListener with a click event and then invoke the function "playGame".
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}

//Within "playGame" function we are going to determine what got clicked and what was the value of the element that got clicked. We use e.target which will return the element that triggered the event and then we can look at the innerText of that element and asign it to "playerSelection". We are asigning Math.random function to "computerSelection", which will return a value between 0 and 1. We have three options (Rock, Paper and Scissors) and depending on what value we get from Math.random we are going to asign a string. Using conditional statements we are going to check if "computerSelection" is less than 0.34 and if it is we'll asign the string "Rock", less or equal to 0.67 we'll be asigning "Paper" and if it's bigger than 0.67 we'll asign "Scissors". Then using the "checkWinner" function we are going to check all the possible outcomes of the game, display the winner and increment the corresponding array value by 1 for winner. If player selection is equal to computer selection the function will return a draw with string "Draw results in a tie match".
function playGame(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = "Rock";
    }
    else if (computerSelection <= 0.67) {
        computerSelection = "Paper";
    }
    else {
        computerSelection = "Scissors";
    }
    let result = checkWinner(playerSelection, computerSelection);
    if (result == "Player") {
        result += " wins!";
        winner[0]++;
    }
    else if (result == "Computer") {
        result += " wins!";
        winner[1]++;
    }
    else {
        result += " results in a tie match";
    }
    score.innerHTML = "<small>Player</small>[" + winner[0] + "] <small>Computer</small>[" + winner[1] + "]";
    messager(playerSelection + " vs " + computerSelection + "<br><b>" + result + "</b>");
}

function messager(mes) {
    message.innerHTML = mes;
}

function checkWinner(pl, co) {
    if (pl === co) {
        return "Draw";
    }
    if (pl === "Rock") {
        if (co === "Paper") {
            return "Computer";
        }
        else {
            return "Player";
        }
    }
    if (pl === "Paper") {
        if (co === "Scissors") {
            return "Computer";
        }
        else {
            return "Player";
        }
    }
    if (pl === "Scissors") {
        if (co === "Rock") {
            return "Computer";
        }
        else {
            return "Player";
        }
    }
}
