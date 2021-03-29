var bg;
var bg2;
var bg3;
var bg4;
var bg5;
var input;
var gameover = 0;
var button;
var sceneNum = 0
var sound;
var sceneNum = 0;
var ugn;
var cgn1;
var cgn2;
var answer;
var score = 0;

//music
function preload() {
  sound = loadSound("Creative.mp3");
}

function setup() {

  bgcolor = (25, 70, 100);
  createCanvas(440, 490);

  //Background image
  bg = loadImage('Forest.jpg');
  bg2 = loadImage('Waterfall forest.jpg');
  bg3 = loadImage('bg3.jpg');
  bg4 = loadImage('Autumn.forest.jpg');
  bg5 = loadImage('night.jpg');

  //Coding train (Creating the button)
  createP('');
  input = createInput();
  //Checking asnwer
  button = createButton("Check answer");
  button.mousePressed(checkAnswer);
  // Writing out next question
  button = createButton("Next question");
  button.mousePressed(resetSketch);

}

//Increasing Scene (Side-scroller code)
function keyPressed() {
  if (key == ' ') {
    sceneNum++;
  }
}

//Start screen
var drawScene1 = function() {
  //My code
  background(bg2);
  textSize(24);
  fill(255);
  textFont('Georgia');
  text('Welcome to the multiplication game!', 35, 180)
  text('Answer questions in textbox below', 35, 230)
  textSize(18);
  text('Click "check answer" then move on to next question!', 15, 280);
  text('Press space to begin!', 140, 330);
}

//Side scroller code
var drawScene2 = function() {
  game();
}
var drawScene3 = function() {
  gameOver();
}
//Scenes being drawn
function draw() {
  //Side-scroller game (sceneNum)
  if (sceneNum % 2 == 0) {
    drawScene1();
  } else if (sceneNum % 2 == 1) {
    drawScene2();
  }
}

//Running of the game itself
// All my code from scratch

function game() {
  ugn = input.value();
  ugn = input.value();
  let cgn1 = floor(random(1, 12));
  let cgn2 = floor(random(1, 12));
  answer = (cgn1 * cgn2);
  background(bg);
  fill(255);
  print(answer);
  textSize(50);
  text(cgn1 + " x " + cgn2, 175, 200);
  sound.play();
  textSize(30);
  textFont('Georgia');
  fill(255);
  text("Score: " + score, 180, 40)
  print(score);
  noLoop();
}

