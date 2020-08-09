
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ball2,ball3,balll4,dustbin;

function setup() {
createCanvas(400, 400);


engine = Engine.create();
world = engine.world;

ball1 = new Ball(200,200,10,10);
ball2 = new Ball(200,230,10,10);
ball3 = new Ball(200,260,10,10);
ball4 = new Ball(200,290,10,10);
dustbin = new Dustbin(200,400,40,40);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed() {
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:200,y:400});
  Matter.Body.applyForce(ball2.body,ball2.body.position,{x:200,y:400});
  Matter.Body.applyForce(ball3.body,ball3.body.position,{x:200,y:400});
  Matter.Body.applyForce(ball4.body,ball4.body.position,{x:200,y:400});
}

}