var ship,ship_1,ship_2,ship_3,ship_4;
var sea,seaimg;

function preload(){
ship_1 =loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");


seaimg = loadImage("sea.png");


}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200);
  sea.addImage(seaimg);
  sea.scale=0.3;
  sea.velocityX=-2;
  
  
  ship = createSprite(310,200,20,50);
  ship.addAnimation("1",ship_1);
  ship.scale=0.2;

  
  
 
  
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=width/2;
  }
  

  drawSprites();
 
}