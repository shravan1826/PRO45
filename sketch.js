var knife;
var knife1;
var PLAY=1;
var END=0;
var gameState=1;
var fruitGroup,enemyGroup;
var bgimg;
var fruit1 , monster, fruit2,fruit3, fruit4 ;
var score=0

function preload(){
knife = loadImage(".assets/sword.png");
fruit1=loadImage(".assets/fruit1.png");
fruit2=loadImage(".assets/fruit2.png");
fruit3=loadImage(".assets/fruit3.png");
fruit4=loadImage(".assets/fruit4.png");
monsterImage=loadAnimation(".assets/alien1.png","alien2.png");
bgimg = loadImage("backgroung.jpg")
gameOverImage = loadImage(".assets/gameover.png");
knifesound=loadSound(".assets/knifeSwooshSound.mp3");
gameover=loadSound(".assets/gameover.mp3");

  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  knife1= createSprite(400,400);
  knife1=addImage(knife)
  knife1.scale = 0.7
  fruitGroup=new Group();
  enemyGroup=new Group();
}

function draw() {
  background(bgimg);
  fruits();
  drawSprites();
}
function fruits(){
  if(World.frameCount%60===0){
  fruit=createSprite(400,200,20,20)
 fruit.scale=0.2
    r=Math.round(random(1,4))
      if(r==1){
        fruit.addImage(fruit1)
      }else if (r==2){
        fruit.addImage(fruit2)
      }else if(r==3){
        fruit.addImage(fruit3)
      }else if(r==4){
        fruit.addImage(fruit4)
      }
    fruit.y=Math.round(random(70,200))
    fruit.velocityY=-8
    fruit.setLifetime=100
    fruitGroup.add(fruit)
    position=Math.round(random(1,2))
    if (position==1){
      fruit.x=400
       if(score>4){
      fruit.velocityY=-(8+2)
    }
    }
     if (position==2){
       if(score>10){
      monster.velocityY=-12
      console.log(monster.velocityY)
    }
  }
}
}
function enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20)
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(300,100));
    monster.velocityY=-8
    monster.setLifetime=50
    
    enemyGroup.add(monster)
  }
}