
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
console.log("hi there from script.js" + img1 + img2);

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function changeImage() {
    const dice1 = rollDice();
    const dice2 = rollDice();
    img1.src = `images/dice${dice1}.png`;
    img2.src = `images/dice${dice2}.png`;
    if (dice1 > dice2) {
        document.querySelector('h1').innerHTML = 'Player 1 Wins!';
    } else if (dice2 > dice1) {
        document.querySelector('h1').innerHTML = 'Player 2 Wins!';
    } else {
        document.querySelector('h1').innerHTML = 'Draw!';
    }
}

changeImage();