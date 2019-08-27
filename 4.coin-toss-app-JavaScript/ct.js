//We create a variable named "message" (we use const, because we won't be changing the variable) and select the div tag with class "message" using method querySelector.
const message = document.querySelector(".message");

//We create a variable named "buttons" and select all button tags with method querySelectorAll, which creates a node list with the contents of these elements. Later we are going to use the contents of these elements and determine which button was clicked by connecting them with addEventListener within the DOM.
const buttons = document.querySelectorAll("button");

//We create an array named "coinArray" with content "Heads" and "Tails", which we will use later for the random result of the coin.
const coinArray = ["Heads","Tails"];

//We create an array named "score" with content two zeros [0,0], which we will use for saving the score later on.
const score = [0,0];

//We create a for loop to loop trough the "buttons" node list. For each "buttons" object we set the iterated value of [i] that will be 0 and 1, because there are only 2 button tags and with addEventListener we start to listen for a click event that will invoke the "tossCoin" function for each of the two buttons.
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click",tossCoin);
}

//Within this function we check to see the element that triggered the event and see what their inner text is. So in this case we have "Heads" or "Tails" and we asign to the variable "playerGuess" the value that we got with e.target.innerText from the clicked button ("Heads" or "Tails"). The next variable "computerToss" we asign a Math.random function and by multipling it with 2 and adding the Math.floor function we receive a random result of 0 or 1. With "computerGuess" we set the randomly received number (0 or 1) to the "coinArray". That way if it's 0 we are going to get a value of "Heads" and if it's 1 we'll get the second value from the array, which in this case is "Tails". Then we print the values with message.innerHTML in the div tag with class "message".
function tossCoin(e){
  let playerGuess = e.target.innerText;
  let computerToss = Math.floor(Math.random()*2);
  let computerGuess = coinArray[computerToss];
  message.innerHTML = "<h1>Coin is on: " + computerGuess + "</h1><br>" + "Player selected: " + playerGuess + "<br><br>";

//Here with an if else statement we check to see if the "playerGuess" is equal to the "computerGuess". If it is, the player wins and if it's not the computer wins. Then we increment the "score" array by one for the winner.
  if (playerGuess === computerGuess){
    output = "Player Wins<br>";
    score[0]++;
  } else {
    output = "Computer Wins<br>";
    score[1]++;
  }

//Here we update the score accordingly and output the final message to the div with class "message".
  message.innerHTML += output + "<br>Player: " + score[0] + " | Computer: " + score[1] + "<br><br>";
}
