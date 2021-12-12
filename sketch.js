const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	var Edge_options={
		isStatic: true
	  };

	  var ground_options ={
		isStatic: true
	  };

	 rock_options={
		restitution:0.85
	  }
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	 ball_options = {
		restitution: 0.95,
		frictionAir:0.01
	  }
	   
	Engine.run(engine);
  
	ground = Bodies.rectangle(200,700,400,20,ground_options);
	World.add(world,ground);

	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	
	Edge=Bodies.rectangle(100,700,100,20,Edge_options);
  	World.add(world,Edge);

	rock=Bodies.circle(300,20,10,rock_options);
  	World.add(world,rock);

	rectMode(CENTER);
  	ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
  background("gray");	
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,30);
  //rect(ball.position.x,ball.position.y,400,20);

  rect(rock.position.x,rock.position.y,40);

  drawSprites();
 
}



