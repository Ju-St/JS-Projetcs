//We create a variable named "button" (we use const, because we won't be changing the variable) and select the button tag with method querySelector.
const button = document.querySelector("button");

//We create a variable named "player1" and select the div id "player1" with method querySelector.
const player1 = document.querySelector("#player1");

//We create a variable named "player2" and select the div id "player2" with method querySelector.
const player2 = document.querySelector("#player2");

//We create a variable named "output" and select the div id "output" with method querySelector.
const output = document.querySelector("#output");

//With addEventListener we start to listen for a click event on the button and then we invoke an anonymous function. Let us first have a look at the "roll" function. For this game logic we need a random number betweem 1 and 6 for player1 and player2 every time we press the button "Roll". Therefore we use Math.random function multiplied with the num value (that we are going to provide in the function brackets later on) plus 1 and because we need a whole number we wrap everything with Math.floor. And for a more visual representation of the result we add the unicode decimal code which for dices starts from &#9856 (1) to &#9861 (6) using again the random number from the "rNumber" variable (which we asigned to the result of Math.random).

//Ok, now back to the anonymous function. We create a variable named "rolls" on which we asign an array with the "roll" function. In the "roll" function we put 6, because we need a random number from 1 to 6 (and that's possible because we added +1 in the result of Math.random, if we didn't add 1 to the result we were going to receive a number between 0 and 5).Then with a conditional statement we check to see if random number for player1 is equal to the random number of player2 and if it is, we asign a string "It was a draw!" to the "temp" variable. Then we check if player1 random number is bigger than player2 and if it is we asign a string "player1 wins!" to "temp" variable, and if it's not we asign a string value "player2 wins!". Then using innerHTML we print the result to the div with id "output" and results for player1 and player2.
button.addEventListener("click",function(){
  let rolls = [roll(6),roll(6)];
  let temp;
  if(rolls[0] == rolls[1]){temp = "It was a draw!";}
  else if(rolls[0] > rolls[1]){temp = "player1 wins!";}
  else {temp = "player2 wins!";}
  output.innerHTML = temp;
  player1.innerHTML = rolls[0];
  player2.innerHTML = rolls[1];
});

function roll(num){
  let rNumber = Math.floor(Math.random() * num) + 1;
  let n = 9855 + rNumber;
  let char = "&#"+n+";";
  return rNumber + " " + char;
}
