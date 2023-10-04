var canvas;
var roadImage, loadingScreenImage, roadBlockImage, car1_img, car2_img, police_img
var npc1Image, npc2Image, npc3Image, npc4Image, npc5Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, car3;
var cars = [];

function preload() {
  roadImage = loadImage("./assets/Road.png");
  roadBlockImage = loadImage("./assets/roadblock.png")
  car1_img = loadImage("./assets/Car1.png");
  car2_img = loadImage("./assets/Car2.png");
  police_img = loadImage("./assets/PoliceCar.png");
  npc1Image = loadImage("./assets/npc1.png")
  npc2Image = loadImage("./assets/npc2.png")
  npc3Image = loadImage("./assets/npc3.png")
  npc4Image = loadImage("./assets/npc4.png")
  npc5Image = loadImage("./assets/npc5.png")
  reset_img = loadImage("./assets/reset.png")
  loadingScreenImage = loadImage("./assets/loadingScreen.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(loadingScreenImage);
  if (playerCount === 3) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
