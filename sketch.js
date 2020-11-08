
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(240,350,20);
	bob2 = new Bob(280,350,20);
	bob3 = new Bob(320,350,20);
	bob4 = new Bob(360,350,20);
	bob5 = new Bob(400,350,20);
	bob6 = new Bob(440,350,20);

	base = new Base(350,100,300,20);

	

	rope1 = new Rope(bob1.body,base.body,0,0);
	rope2 = new Rope(bob2.body,base.body,0,0);
	rope3 = new Rope(bob3.body,base.body,0,0);
	rope4= new Rope(bob4.body,base.body,0,0);
	rope5 = new Rope(bob5.body,base.body,0,0);
	rope6 = new Rope(bob6.body,base.body,0,0);
	
	


	


	
	

	Engine.run(engine);
  
}


function draw() {
  background(200);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  
  base.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  
  
  drawSprites();
 
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(240,350,20);
	bob2 = new Bob(280,350,20);
	bob3 = new Bob(320,350,20);
	bob4 = new Bob(360,350,20);
	bob5 = new Bob(400,350,20);
	bob6 = new Bob(440,350,20);

	base = new Base(350,100,300,20);

	

	rope1 = new Rope(bob1.body,base.body,-5*bob1.radius,0);
	rope2 = new Rope(bob2.body,base.body,-3*bob2.radius,0);
	rope3 = new Rope(bob3.body,base.body,-1*bob3.radius,0);
	rope4= new Rope(bob4.body,base.body,bob4.radius,0);
	rope5 = new Rope(bob5.body,base.body,3*bob5.radius,0);
	rope6 = new Rope(bob6.body,base.body,5*bob6.radius,0);
	
	


	


	
	

	Engine.run(engine);
  
}


function draw() {
  background(200);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  
  base.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob6.body,bob6.body.position,{x:-105,y:-85});

	}
}






