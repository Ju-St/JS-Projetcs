(function randNum() {
  let randomNumber = function(max) {
    return Math.floor((Math.random() * max) + 1)
  }

  const img = document.querySelectorAll('img');
  const message = document.querySelector('h1');

  let val1 = randomNumber(6);
  let val2 = randomNumber(6);

  img[0].setAttribute('src', 'images/dice' + val1 + '.png');
  img[1].setAttribute('src', 'images/dice' + val2 + '.png');

  if (val1 === val2) {
    message.innerHTML = "It's a DRAW!";
  } else if (val1 > val2) {
    message.innerHTML = "Player 1 WINS!";
  } else {
    message.innerHTML = "Player 2 WINS!";
  }
})();
