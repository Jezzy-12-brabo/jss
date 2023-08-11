var fundoImg, fundo;
var ufoImg, ufo;
var fogueteImg, foguete;
var coinImg, coin;
var explosaoImg, explosao; 

var coinGroup;
var ufoGroup;

var score = 0;
var life = 3;

var gameState = "play";

//carregar imagens
function preload() {
fundoImg=loadImage("img/whatsapp.png");
ufoImg=loadImage("img/goku.jpg");
fogueteImg=loadImage("img/pacman.png");
explosaoImg=loadImage("img/social credits.png");
coinImg=loadImage("img/100 reais.jpg");



}


function setup() {
  createCanvas(800,800);
  

  //criar sprites
  fundo = createSprite(400,400)
  fundo.addImage(fundoImg)
  fundo.scale=2.5

  foguete = createSprite(400,600)
  foguete.addAnimation("foguete",fogueteImg)
  foguete.addAnimation("explosao",explosaoImg)
  foguete.scale=0.1

  coinGroup = new Group()
  ufoGroup = new Group()
}

function draw() {
  background(0);

  drawSprites();

  textSize(25)
  fill("yellow")
  text("Vidas: " + life, 60,100) 
  
  textSize(25)
  fill("yellow")
  text("pontos: " + score, 60,200)

  //criar estado de jogo "play"
  if (gameState == "play") {
    fundo.velocityY = 4;
    

    if (fundo.y > 800) {
      fundo.y = 200
    }
  
    if(keyDown("RIGHT_ARROW")){
      foguete.x += 5;
    }
    if(keyDown("LEFT_ARROW")){
      foguete.x -= 5;
    }
    // removeLife()
    // removeCoins()
    // spawnAliens()
    // spawnCoins()

    if(life==0){
      gameState = "end"
    }
  }
  



  //criar estado de jogo "end"
 
  if(gameState == 0){
  //remover grupos
  coinGroup.destroyEach()
  ufoGroup.destroyEach()
  fundo.velocityY = 0
  foguete.velocityX = 0
  //mudar animação do foguete para explosão
  foguete.changeAnimation("explosao", explosaoImg)
  textSize(30)
  fill("orange") 
  text("Game Over!!!", 300, 400)

  }
}

function spawnAliens() {
  if(frameCount % 60==0){
    ufo = createSprite(random(30,770), random(10,450))
    ufo.addImage(ufoImg)
    ufo.velocityY = 3 
    ufo.scale = 0.2
    // tempo de vida do sprite
    ufo.lifeTime = 800
    ufoGroup()

  }
  
}

function spawnCoins() {
    if(frameCount % 60==0){
    coin = createSprite(random(30,770), random(10,450))
    coin.addImage(coinImg)
    coin.velocityY = 3 
    coin.scale = 0.2
    // tempo de vida do sprite
    coin.lifeTime = 800
    coinGroup(coin)

  }
  
 
}

function removeCoins() {
  foguete.overlap(coinGroup, function(collector, collected){
    score += 1;
    collected.remove();
  });
}

function removeLife() {
  
 }