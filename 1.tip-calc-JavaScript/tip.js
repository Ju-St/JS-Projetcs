//We create a variable named "button" (we use const, because we won't be changing the variable) and select the button tag with method querySelector.
const button = document.querySelector("button");

//We create a variable named "cost" and select the input tag with method querySelector.
const cost = document.querySelector("input");

//And last we create a variable named "output" and select the div tag with class "output" using the method querySelector.
const output = document.querySelector(".output");

//With addEventListener we start to listen for a click event on the selected button and then we invoke an anonymous function.
button.addEventListener("click",function(){

  //We create a "tip" variable and then asign a calculation that takes the entered value from the input field and multiplies it with 0.15 (15%). Using the toFixed method we restrict the result from the calculation to the second symbol after the decimal point (1/100). Then we print the result in the div tag using output.innerHTML (the innerHTML allows us to have HTML code inside the quotes) asigned to the "temp" variable which holds template literal with "tip" and "cost.value" (in cost.value we hold the entered value from the input tag/field).
  let tip = (cost.value * 0.15).toFixed(2);
  let temp = `<h1>You should tip $${tip} on $${cost.value}.</h1>`;
  output.innerHTML = temp;
});
