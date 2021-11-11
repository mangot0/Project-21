
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		isStatic: false,
		restitution: 0.01,
		friction:6,
		density:1.2,
	}

	ball = Bodies.circle(200, 100, 25, ball_options);
	World.add(world, ball);

	leftSide = new Ground(windowWidth - 400, windowHeight - 110, 20, 150);
	rightSide = new Ground(windowWidth - 130, windowHeight - 110, 20, 150);
	ground = new Ground(windowWidth/2, windowHeight - 20, windowWidth, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball.position.x, ball.position.y, 25);

  leftSide.display();
  rightSide.display();
  ground.display();
  
  drawSprites();

  keyPressed();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.9, y:-0.7});
	}
}

