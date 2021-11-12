var ash,clash,coins;
var bg;
var gameState = "play"


function preload() {
     bgIMG = loadImage("GROUND.jpg");
     ashIMG = loadImage("ASH.png");
     clashIMG = loadImage("CLASH.png");
     coinsIMG = loadImage("coins.png");
     coinsSND = loadSound("coinAlert.wav");
     gameOverSND = loadSound("gameOver.wav")
}


function setup() {
  createCanvas(800,400);
  Ash = createSprite(400, 200, 50, 50);
  Ash.addImage(ashIMG);

}

function draw() {
  background(bgIMG);  

  if(keyDown("space")) {
    Ash.velocityY = -10;
  }
  
  if(keyDown("LEFT_ARROW")) {
    console.log("Hello");
    Ash.x = Ash.x-1;
  }

  if(keyDown(RIGHT_ARROW)) {
    Ash.x = Ash.x+1;
  }

  if(keyDown(DOWN_ARROW)) {
    Ash.y = Ash.y-1;
  }

  if(keyDown(UP_ARROW)) {
    Ash.y = Ash.y+1;
    
  }

  spawnCoins();
  spawnEnemies();

  drawSprites();
}

function spawnCoins() {
    if (frameCount%100 === 0) {
      var x = Math.round(random(100,600));
      var y = Math.round(random(100,350));
      var coins = createSprite(x,y);
      coins.addImage(coinsIMG);

    }
}

function spawnEnemies() {

}