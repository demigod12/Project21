var speed, weight, thickness;
var bullet, wall;

function setup() {
  createCanvas(1600,500);

  speed = random(233, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(1000, 200, 60, height/2); 
  wall.shapeColor = color(50, 50, 50);

  bullet = createSprite(400, 200, 40, 20);
  bullet.shapeColor = color(255, 255, 255);
  bullet.velocityX = speed;
  
}

function draw() {
  background(0,0,0); 



  if (wall.x - bullet.x < (bullet.width + wall.width)/2) {
    var damage = 0.5 * weight * speed * speed /(thickness*thickness*thickness);

    if(damage>10) {
      bullet.shapeColor = color(255, 0, 0);
    }
    //if(deformation<180 && deformation>100){
      //bullet.shapeColor = color(230, 230, 0);
    //}
    if(damage<10) {
      bullet.shapeColor = color(0, 255, 0);
    }
  }
  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
  }
  
  drawSprites();
}


function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>= wallLeftEdge){
    return true;
  }
  return false;
}