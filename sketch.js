
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,db1;
var ground;
var db2,db3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);


	Engine.run(engine);
  paper1=new Paper(100,300,20,20);
 db1 =new Box(500,200,20,80);
 db2 =new Box(400,200,20,80);
 db3 =new Box(430,200,80,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  db1.display();
  db2.display();
  db3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode=== UP_ARROW){

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:90,y:20});
  }
}
