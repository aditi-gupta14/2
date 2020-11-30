const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = Engine.World;
  
 if(frameCount % 60 === 0){
  var p = new Particle(300, 50, 10);
  particles.push(p);
 }
  
 

}

function draw() {
  background(51);  

  Engine.update(engine);
  p.show();
}