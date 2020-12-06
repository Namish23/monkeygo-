var PLAY=1;
var END=1;
gameState=PLAY;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,monkey,ground;
var score;
var survivalTime=0;
var background1,background1Image;
var ground;
var gameOverImage,dot;

function preload(){
  
  
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 
  backgroundImage=loadImage("jungle.jpg");
  
  gameOverImage=loadImage("images.jpg");
}



function setup() {
  createCanvas(500,500);
 monkey=createSprite(80,415,20,20);
 monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
   background1=createSprite(400,350);
   background1.addImage(backgroundImage);
   background1.scale=1;
   background1.velocityX=-4;
   background1.x=background1.width/2;
  
  ground=createSprite(200,490,400,10);

  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  
  
  score=0;
}


function draw() {
  background("white");
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  background1.velocityX = -4;
  if ( background1.x < 0){
       background1.x = background1.width/2;
    }
    
    if(monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach();
      score=score+1;
    }
    monkey.depth=background1.depth;
    monkey.depth++;

    background1.depth=ground.depth;
    background1.depth++;

  
   monkey.velocityY = monkey.velocityY + 0.8;
   monkey.collide(ground);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
    bananas();
    obstacles();
  
    switch(score){
      case 3:monkey.scale=0.18;
        break;
      case 6:monkey.scale=0.14;
        break;
      case 9:monkey.scale=0.16;
        break;
      case 12:monkey.scale=0.18;
        break;
    }
    if(monkey.isTouching(obstacleGroup)){
      monkey.scale=0.1;
      
  }
   
     
   drawSprites();
   text("Score:"+score,20,20);
  text("SurvivalTime:"+survivalTime,150,20);
  
 
  
  
}
function obstacles(){
 if (frameCount % 200 === 0){
   var obstacle = createSprite(600,460,10,40);
    obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;
   obstacle.scale=0.15;
   obstacle.lifeTime=50;
   monkey.depth=obstacle.depth;
   monkey.depth++;
   obstacleGroup.add(obstacle);
 }

 }
function bananas(){
if (frameCount % 200=== 0) {
    var banana = createSprite(600,220,40,10);
     banana.y = Math.round(random(100,200));
     banana.addImage(bananaImage);
     banana.scale = 0.05;
    banana.velocityX = -3;
  banana.lifeTime=50;
  bananaGroup.add(banana);
}
}


