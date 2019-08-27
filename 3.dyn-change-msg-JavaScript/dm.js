//We create a variable named "button" (we use const, because we won't be changing the variable) and select the button tag with method querySelector.
const button = document.querySelector("button");

//We create a variable named "output" and select the div tag with class "output" using the method querySelector.
const output = document.querySelector("div.output");

//Then by using setAttribute we set the style for the div with class "output".
output.setAttribute("style","width:200px; height:70px; color:white; text-align:center;");

//With addEventListener we start to listen for a click event on the button and then we invoke the "showOutput" function.
button.addEventListener("click",showOutput);

//In short this function gets the current hour with date object and method getHours. Then we use conditional statements (if,else if, else) to check the current ("cur" variable) time and customize a dynamic message that's going to be output to the user. We're also changing the style (background color) for each result with output.style.backgroundColor. We are checking if the current time(hour) assigned to the variable "cur" is greater than 17 and if it is, we are going to print a message "It's evening." using output.innerHTML. For the other cases we check if the current time is more than 12, then we print a message saying "It's afternoon.". The next case is checking if the "cur" variable is bigger or equal to 0,then we print the message "It's morning.". And the else statement is going to print a message "Something is wrong." if none of the returned values from the previous statements are true.
function showOutput(){
  const date = new Date();
  let cur = date.getHours();
  let message;
  if(cur > 17){
    message = "It's evening.";
    output.style.backgroundColor = "black";
  } else if (cur > 12){
    message = "It's afternoon.";
    output.style.backgroundColor = "blue";
  } else if (cur >= 0){
    message = "it's morning.";
    output.style.backgroundColor = "orange";
  } else {
    message = "Something is wrong.";
    output.style.backgroundColor = "red";
  }
output.innerHTML = "<h1>"+message+"</h1>";
}
