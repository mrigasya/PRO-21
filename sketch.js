var bullet;
var wall;
var speed, weight, thickness;
var damage;


function setup() {
  createCanvas(1400,400);
  speed= random(233,3210);
  weight= random(30,52);
  thickness= random(22,83);
  
  bullet=createSprite(50,200,50,5);
  bullet.shapeColor=color(255);

}

function draw() {
  background("black");



  var wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)


  if(keyDown("space")){
    bullet.velocityX=speed}
  

    if(wall.x - bullet.x<(bullet.width + wall.width)/2){
      bullet.velocityX=0
      var damage= 0.5* weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){
  wall.shapeColor=color(255,0,0);
}

else if (damage<10){
  wall.shapeColor=color(0,255,0)
}
    }

  
 

  drawSprites();
}


