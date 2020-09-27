let x = [];
let playerx = 0;
let playery = 400 - 25;
function setup() {
  createCanvas(500, 400);
  x[0] = [0, random(-350, 0)];
  for (let i = 0; i < 50; i++) {
    let xy = [i * 25 + 25, random(-350, 0)];
    x.push(xy);
  }
}
let counter = 0;

let scores = document.getElementById("sc");
let action = document.getElementById("action");
console.log(scores);

function draw() {
  background(61);
  frameRate(30);
  for (let i = 0; i < 50; i++) {
    fill(255, 0, 0);
    rect(x[i][0], x[i][1], 25, 25);
    x[i][1] += 5;
    if (x[i][1] >= 400) {
      x[i][1] = random(-350, 0);
      counter++;

      scores.innerText = `Scores: ${counter}`;
    }
  }
  playerdraw(playerx);
  // noLoop();
  detectcollison();
}

function playerdraw(playerx) {
  fill(255);
  rect(playerx, playery, 25, 25);
}

function goright() {
  if (playerx >= 500 - 25) {
    playerx = 500 - 25;
  } else {
    playerx += 25;
    action.innerHTML = "<h3>action: goright</h3>";
  }
}
function goleft() {
  if (playerx <= 0) {
    playerx = 0;
  } else {
    playerx -= 25;
    action.innerHTML = "<h3>action: goleft</h3>";
  }
}

function detectcollison() {
  for (let i = 0; i < x.length; i++) {
    if (playerx === x[i][0] && playery - 25 - x[i][1] < 50) {
      if (playerx >= random(1, 500)) {
        goleft();
      } else {
        goright();
      }
    }
    if (x[i][0] === playerx && x[i][1] >= playery) {
      console.log(x[i][0], x[i][1], " ", playerx, playery);
      action.innerHTML = "<h3>action: Game Over</h3>";

      noLoop();
    }
  }
}
