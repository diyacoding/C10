

var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage = loadImage("ground2.png")
}
function setup(){
  createCanvas(600,200);
  
  ground = createSprite(300,180,600,20)
  ground.addImage("ground",groundImage)
  
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running)
  edges = createEdgeSprites();
trex.scale = .5


}


function draw(){
  //set background color 
  background("white");
  
ground.velocityX = -2
console.log(ground.x)

if (ground.x < 0){

ground.x = ground.width/2

}


  if(keyDown("space")){
      trex.velocityY = -10;
  }

  trex.velocityY += 0.5
  //logging the y position of the trex
//  console.log(trex.y)

trex.collide(ground)
  drawSprites();
}