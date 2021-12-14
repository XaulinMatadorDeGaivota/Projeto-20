const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var engine;
var world;


var rock,ball,qua;

function preload(){
	
}

function setup() {
	createCanvas(550, 600);
	engine = Engine.create();
	world = engine.world;

	//ARIANA: VOCÊ CRIOU SSO E NÃO USOU 
	//var Edge_options={
		//isStatic: true
	 // };

	  var qua_options = {
		restitution:0.05,
		fiction:0.02,
		frictionAir:0  
	  }

	  var plane_options ={
		isStatic: true
	  }

	  plane = Bodies.rectangle(600,580,1200,2,plane_options);
	  World.add(world,plane);

	 var rock_options={
		restitution:0.85,
		fiction:0.01,
		frictionAir:0.01
	  };
	
	 var ball_options = {
		restitution: 0.95,
		friction:1,
		frictionAir:0.01
	  };
	   
	//Engine.run(engine);
  
	

	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	
	//Edge=Bodies.rectangle(100,700,100,20,Edge_options);
  	//World.add(world,Edge);

	rock=Bodies.rectangle(300,20,10,10,rock_options);
  	World.add(world,rock);
	//ARIANA: AQUI VOCÊ TINHA DITO QUE ERA CIRCULAR PORÉM NO FUNCTIONDRAW VOCÊ ESCREVEU QUADRADO USANDO RECT
	qua = Bodies.rectangle(100,10,20,10,qua_options);
	World.add(world,qua);

	
	rectMode(CENTER);
  	ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
  background("gray");	
  Engine.update(engine);

  rect(plane.position.x,plane.position.y,1200);

  ellipse(ball.position.x,ball.position.y,30);
  //rect(ball.position.x,ball.position.y,400,20);

  rect(rock.position.x,rock.position.y,40,40);

  rect(qua.position.x,qua.position.y,50,40);

  //drawSprites();
 
}
