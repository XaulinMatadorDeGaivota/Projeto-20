const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;

var rock,ball,qua;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var Edge_options={
		isStatic: true
	  };

	  var qua_options = {
		restitution:0.05,
		fiction:0.02,
		frictionAir:0  
	  }

	  var ground_options ={
		isStatic: true
	  };

	 rock_options={
		restitution:0.85,
		fiction:0.01,
		frictionAir:0.01
	  }
	
	 ball_options = {
		restitution: 0.95,
		friction:1,
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

	qua = Bodies.rectangle(100,10,20,qua_options);
	World.add(world,qua);

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

  rect(qua.position.x,qua.position.y,50);

  drawSprites();
 
}
