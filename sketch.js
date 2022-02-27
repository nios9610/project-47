function preload()    {
bg=loadImage("space image.png")
surface1=loadImage("moon surface.png")
spaceCraftimg=loadImage("spacecraft.png")
obstaclesimg=loadImage("meteor (1).png")
obstacles2=loadImage("meteor (1).png")
}
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
surface=createSprite(700,350,200,100);
surface.addImage(surface1)
surface.scale=0.4

spaceCraft=createSprite(50,300,100,100);
spaceCraft.addImage(spaceCraftimg)
spaceCraft.scale=0.3

obstacles=createSprite(450,250,50,50);
obstacles.addImage(obstaclesimg)
obstacles.scale=0.5

obstacles1=createSprite(700,80,50,50);
obstacles1.addImage(obstacles2)
obstacles1.scale=0.6

spaceCraft.debug=true
obstacles.debug=true
obstacles1.debug=true
surface.debug
obstacles.setCollider("circle",0,0,50)
obstacles1.setCollider("circle",0,0,50)

}

function draw() {
  background(bg); 
  //addImage("moon surface.jpg") 

 if(keyDown("UP_ARROW")){
spaceCraft.y-=5
}
 if(keyDown("RIGHT_ARROW")){
spaceCraft.x+=5
 }
 if(keyDown("DOWN_ARROW")){
   spaceCraft.y+=5
 }
 if(keyDown("LEFT_ARROW")){
   spaceCraft.x-=5
 }
 if(spaceCraft.isTouching(obstacles)){spaceCraft.x=50;spaceCraft.y=300}

if(spaceCraft.isTouching(obstacles1)){spaceCraft.x=50;spaceCraft.y=300}

  drawSprites()

  }