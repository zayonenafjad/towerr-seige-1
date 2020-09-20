const Constraint=Matter.Constraint
const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies



var base1,base2,slingshot,square1,square2,square3,square4,square5,square6,square7,square8,square9,square10;
var square11,square12,square14,square14,square15,square16;




function setup() {
  createCanvas(800,400);
  engine=Engine.create();;

  world=engine.world;

  square=Bodies.rectangle(200,200,50,50);

  World.add(world,square);
  
slingshot= new Slingshot(square,{x:50,y:100});

//first row of the first tower
base1=new Tower(400,300,300,7);


square1=new Tower(310,283,30,30);

square2=new Tower(340,283,30,30);

square3= new Tower(370,283,30,30);
 
square4= new Tower(400,283,30,30);

square5= new Tower(430,283,30,30);

square6= new Tower(460,283,30,30);

square7= new Tower(480,283,30,30);

//second row of the first tower










//createSprite(400, 200, 50, 50);
}

function draw() {
  background(255); 

  Engine.update(engine);

fill("orange")
slingshot.display();

fill("PURPLE")
base1.display();

fill("skyblue")
square1.display();

square2.display();

square3.display();

square4.display();

square5.display();

square6.display();

square7.display();

rectMode(CENTER);

rect(square.position.x,square.position.y,50,50);
}