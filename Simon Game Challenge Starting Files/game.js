

function buttonClicked(currentColour) {
  console.log(currentColour);
  var buttonClicked = new Audio('sounds/' + currentColour + '.mp3');
  buttonClicked.play();
}
