var basketImg,candyImg,bgImg;
var basket,candy;
var canvas;
var c1,c2,c3,c4,c5,c6,c7,c8,c9;
var pc;
var le,re;
var score=0, strike=0;
var strikeSnd, scoreSnd;
function preload(){
c1=loadImage("candy1.png");
c2=loadImage("candy2.png");
c3=loadImage("candy3.png");
c4=loadImage("candy4.png");
c5=loadImage("candy5.png");
c6=loadImage("candy6.png");
c7=loadImage("candy7.png");
c8=loadImage("candy8.png");
c9=loadImage("candy9.png");

bgImg=loadImage("bg.jpg");

basketImg=loadImage("pump.png");

strikeSnd=loadSound("hi.wav");
scoreSnd=loadSound("scr.wav");
}

function setup(){
  //creating the canvas
  canvas=createCanvas(1100,500);

  //creating the candy sprite
  candy=createSprite(500,100,60,60);
  c_andy();
  candy.scale=0.6;

  //creating the edges
  re=createSprite(1100,0,5,1000);
  le=createSprite(0,0,5,1000);
  bt=createSprite(0,500,2500,5);

  //creating the basket sprite
  basket=createSprite(500,400,60,60);
  basket.addImage(basketImg);

}

function draw(){
background(bgImg);

if(keyDown("LEFT_ARROW")){
  candy.velocityX=-6;
}
if(keyDown("Right_ARROW")){
  candy.velocityX=6;
}

if(keyDown("DOWN_ARROW")){

  candy.velocityY=10
}


if(candy.isTouching(basket)){
  candy.destroy();
  score=score+1
  candy=createSprite(500,100,60,60);
  c_andy();
  candy.scale=0.6;
  strikeSnd.play();
}
else if(candy.isTouching(bt)){
  candy.destroy();
  strike=strike+1
  candy=createSprite(500,100,60,60);
  c_andy();
  candy.scale=0.6;
  
  scoreSnd.play();
}
fill("white")
textSize(30);
text("Score:"+score, 50, 230)
text("Strikes:"+strike, 50, 260)

candy.bounceOff(le);
candy.bounceOff(re);

basket.setCollider("circle",0,0,10);
basket.velocityX=9;

if(basket.isTouching(re)){
  basket.velocityX=-9
}

if(strike===3){
candy.destroy();
basket.destroy();
fill("White")
textSize(60);
text("GAMEOVER!",350,350);
text("Press Enter to Play Again.",200,420);
}

if(keyDown("ENTER")){
  score=0
  strike=0
  candy=createSprite(500,100,60,60);
  c_andy();
  candy.scale=0.6;
  basket=createSprite(500,400,60,60);
  basket.addImage(basketImg);
  basket.setCollider("circle",0,0,10);
basket.velocityX=9;

}

drawSprites();
}

function c_andy(){

  var no=Math.round(random(1,9))

if(no===1){
candy.addImage(c1)

}
else if(no===8){
  candy.addImage(c2);

}
else if(no===2){
  candy.addImage(c3);

}
else if(no===2){
  candy.addImage(c3);

}
else if(no===3){
  candy.addImage(c4);
  
}
else if(no===4){
  candy.addImage(c5);
  
}
else if(no===5){
  candy.addImage(c6);

}
else if(no===6){

  candy.addImage(c7);
}
else if(no===7){

  candy.addImage(c8);
}
else if(no===9){
  candy.addImage(c9);
  
}
}

