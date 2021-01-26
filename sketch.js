const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies
function setup() {

  createCanvas(400,400);
engine=Engine.create()
world=engine.world;
var options={
  isStatic:true,
}
ground=Bodies.rectangle(200,380,400,25,options)
World.add(world,ground)
var optionsB={
  isStatic:false,
  restitution:1,
}
bouncy=Bodies.circle(200,200,25,optionsB)
World.add(world,bouncy)
}

function draw() {
  background(0,0,0);  
  Engine.update(engine)
  rectMode(CENTER)
rect (ground.position.x,ground.position.y,400,25)
ellipseMode(RADIUS)
ellipse(bouncy.position.x,bouncy.position.y,25,25)
}