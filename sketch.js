const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundImage = loadImage("GamingBackground.png");
}

function setup() {
	createCanvas(900,400);

  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (300, 300, 600, 10);
  superhero= new Superhero(100,200,100,100);
  attach=new Throw(superhero.body,{x:150,y:-50});
  block1 = new Block(340,280,30,30);  
  block2 = new Block(340,250,30,30);
  block3 = new Block(340,220,30,30);
  block4 = new Block(340,190,30,30);
  block5 = new Block(340,160,30,30);
  block6 = new Block(340,130,30,30);
  block7 = new Block(340,100,30,30);
  block8 = new Block(400,250,30,30);
  block9 = new Block(400,220,30,30);
  block10 = new Block(400,190,30,30);
  block11 = new Block(400,160,30,30);
  block12 = new Block(400,130,30,30);
  block13 = new Block(400,100,30,30);
  block14 = new Block(460,310,30,30);
  block15 = new Block(460,280,30,30);
  block16 = new Block(460,250,30,30);
  block17 = new Block(460,220,30,30);
  block18 = new Block(460,190,30,30);
  block19 = new Block(460,160,30,30);
  block20 = new Block(460,130,30,30);
  block21 = new Block(460,100,30,30);
  block22 = new Block(460,70,30,30);
  block23 = new Block(520,220,30,30);
  block24 = new Block(520,190,30,30);
  block25 = new Block(520,160,30,30);
  block26 = new Block(520,130,30,30);
  block27 = new Block(520,100,30,30);
  monster = new Monster(700,200,100,100);
  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  
  superhero.display();
  ground.display();
  monster.display();
  stroke(15);
  strokeWeight(3);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
 
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}


