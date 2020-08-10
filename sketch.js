
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var block1,block2,block3,block4,block5,block6,block7,block8;
var ground;
var shot,slingShot;
var speed;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
     block1 = new Hexagon(330,235,30,40);
  block2 = new Hexagon(326,235,30,40);
  block3 = new Hexagon(390,235,30,40);
  block4 = new Hexagon(420,235,30,40);
block5 = new Hexagon(450,235,30,40);
block6 = new Hexagon(360,195,30,40);
block7 = new Hexagon(390,195,30,40);
 block8 = new Hexagon(420,195,30,40);
  ground = new Ground (400,440,300,20);
 shot = new Shot(195,195,30,40);
 slingShot = new SlingShot(shot.body,{x:200,y:100});

}


function draw() {
  rectMode(CENTER);
  background(200);
  block1.display();
  block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
ground.display();
shot.display();
 slingShot.display();  

drawSprites();
}
function mouseDragged(){ 
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
   }

function mouseReleased() {
    slingShot.fly();
}



function mouseDragged(){ 
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
   }

