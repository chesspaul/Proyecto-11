var ship, sea;
var shipImage, seaImage;

function preload(){
shipImage=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImage=loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

 sea=createSprite(400,200);
 sea.addImage("sea", seaImage);
 sea.scale= 0.3;
 sea.velocityX= -4;

 ship= createSprite(130,200,30,30);
 ship.addAnimation("ship", shipImage);
 ship.scale= 0.25;


}

function draw() {

  background(0);

 if (sea.x< 0) {
   sea.x= sea.width /2;
  }

  drawSprites();
}