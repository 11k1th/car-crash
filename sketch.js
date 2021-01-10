var car;
var wall;
var speed, weight, deformation, n, stop1, stop2;

function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(40,110));
  weight = Math.round(random(250,1750));
  stop1 = Math.random(0.5,2);
  stop2 = speed/stop1;
  n = Math.round(weight * stop2);

  wall = createSprite(1287.5, 200, 60, height/2);

  car = createSprite(10, 200, 40, 40);
  car.velocityX = speed/5;
}

function draw() {

  background("black");  

  text(speed+" km/hr",100, 375);
  text(n+" N",100, 390);
  text(weight+" kgs",100, 360);

  textSize(20)

  if(wall.x - car.x < (car.width+wall.width)/2) {

    car.velocityX = 0;
    deformation = (speed * speed * weight)/45000;

    if(deformation > 180) {

      car.shapeColor = "red";
      text("Impact safety: C", 400, 350);

    } else if(deformation < 180 && deformation > 135) {

      car.shapeColor = "yellow";
      text("Impact safety: B-", 400, 350);

    } else if (deformation < 135 && deformation > 80) {

      car.shapeColor = "yellow";
      text("Impact safety: B+", 400, 350);

    } else if(deformation < 80 && deformation > 40) {

      car.shapeColor = "green";
      text("Impact safety: A-", 400, 350);

    } else if(deformation < 40 && deformation > 0) {

      car.shapeColor = "green";
      text("Impact safety: A+", 400, 350);
    }
  }

  drawSprites();
}