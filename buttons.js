var buttons;
let gameDone;

//Checking if correct or incorrect with conditionals
//All my code from scratch
function checkAnswer() {
  print(ugn);
  ugn = input.value();

  textSize(30);
  textFont('Georgia');
  fill(255);
  text("Score: " + score, 180, 40)
  print(score);
  textSize(20);
  fill(255);

  if (answer == input.value()) {
    fill(255);
    textSize(30);
    score++;
    text("Correct!", 170, 300);
    console.log("Correct")
  } else {
    gameover = true;
    drawScene3();
  }
  if (score == 10) {
    win();
  }
}
// Button function Coding train
//Code inside is mine
function resetSketch() {
  if (gameover == false) {
    ugn = input.value();
    let cgn1 = floor(random(1, 12));
    let cgn2 = floor(random(1, 12));
    answer = (cgn1 * cgn2);

    background(bg);
    fill(255);
    print(answer);
    textSize(50);
    text(cgn1 + " x " + cgn2, 175, 200);

    textSize(30);
    textFont('Georgia');
    fill(255);
    text("Score: " + score, 180, 40)
    print(score);

  } else if (gameover == true) {
    afterGame();
  } 
}

function resetSketch2() {
  score = 0;
  ugn = input.value();
  let cgn1 = floor(random(1, 12));
  let cgn2 = floor(random(1, 12));
  var gameDone;
  answer = (cgn1 * cgn2);

  background(bg);
  fill(255);
  print(answer);
  textSize(50);
  text(cgn1 + " x " + cgn2, 175, 200);

  textSize(30);
  textFont('Georgia');
  fill(255);
  text("Score: " + score, 180, 40)
  print(score);

}
