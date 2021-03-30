//My code 
function win() {
  background(bg3);
  fill(255);
  textSize(40);
  text('You won the game!', 80, 200);
  text('You got 10 correct!', 80, 250);
  textSize(20);
  text('Reload page to play again!', 100, 300);
}
//Side-scroller and my code
function gameOver() {
  background(bg5);
  textSize(30);
  text("Incorrect!", 165, 120);
  text('Your score was ' + score, 120, 220);
  text('Correct answer is ' + answer + '!', 90, 170);
  text('Reload page to play again', 70, 270);
  console.log("Incorrect")
}
//My code
function afterGame() {
  background(bg4);
  textSize(30);
  text('Game Over!' + '\n' + 'Reload page to play again', 80, 220);
}
