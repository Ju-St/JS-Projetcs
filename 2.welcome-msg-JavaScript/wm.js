//We create a variable named "button" (we use const, because we won't be changing the variable) and select the button tag with method querySelector.
const button = document.querySelector("button");

//We create a variable named "output" and select the div tag with class "output" using the querySelector.
const output = document.querySelector(".output");

//We create a variable named "myName" and select the input tag with querySelector.
const myName = document.querySelector("input");

//With addEventListener we start to listen for a click event on the button and then we invoke the "showMessage" function.
button.addEventListener("click",showMessage);

//"showMessage" function prints the output message with the template literal and the value of the entered name (myName.value) in the div tag with class "output" using innerHTML.
function showMessage(){
  output.innerHTML = `<h1>Welcome, ${myName.value}</h1>`;
}
