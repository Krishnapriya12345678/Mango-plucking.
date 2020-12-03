var tree,treeImage
var boy,boyImage
var mango1,mango2
var stone1
var catapult1
var ground1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);

tree=createSprite(550,450,10,40)
treeImage=loadImage('tree.png')
tree.scale=0.5

boy=createSprite(200,620,10,30)
boyImage=loadImage('boy.png')
boy.scale=0.1





	engine = Engine.create();
	world = engine.world;

  mango1=new Mango(600,400)
	mango2=new Mango(500,350)
	ground1=new Ground(400,690,900,20)
	stone1=new Stone(50,550,100)
	catapult1=new Catapult(stone1.body,{x:150,y:560})
	Engine.run(engine);
  
}


function draw() {
  console.log(stone1.radius)
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 tree.addImage("tree",treeImage)
 boy.addImage("boy",boyImage)

 mango1.display()
 mango2.display()
 stone1.display()
 catapult1.display()
ground1.display()

 if(isTouching(stone1,mango1)){
  Matter.Body.setStatic(mango1.body,false)
}
if(isTouching(stone1,mango2)){
  Matter.Body.setStatic(mango2.body,false)

}
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    catapult1.fly();
}
function keyPressed(){
    if(keyCode=32){
    catapult1.attach(stone1.body)
    }
}



function isTouching(object1,object2){
  var distance=dist(object2.body.position.x,object2.body.position.y,object1.body.position.x,object1.body.position.y)
if(distance<object2.radius/2+object1.radius/2){
return true
}else{
  return false
}

}





















