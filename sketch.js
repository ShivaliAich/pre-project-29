
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground,platf1,platf2,slingshot;
var polygon,polygonIMG,block1;

function preload(){
    polygonIMG = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    
    slingshot = new SlingShot(this.polygon,{x:100,y:200})
  //first platform blocks  
    //first level blocks
    ground =  new Ground(600,600,1200,20);
    platf1 = new Ground(600,400,250,10);
    platf2 = new Ground(1000,300,250,10);
    block02 = new Block(530,350,30,30);
    block01 = new Block(560,350,30,30);
    block0 = new Block(590,350,30,30);
    block1 = new Block(620,350,30,30);
    block2 = new Block(650,350,30,30);
    block3 = new Block(680,350,30,30);
    //second level blocks
    block4 = new Block(560,300,30,30);
    block5 = new Block(590,330,30,30);
    block6 = new Block(620,300,30,30);
    block7 = new Block(650,300,30,30);
    
    //third level blocks
    block8 = new Block(590,250,30,30);
    block9 = new Block(620,250,30,30);
  //second platform blocks
    // first level blocks 
    block10 = new Block(900,200,30,30);
    block11 = new Block(930,200,30,30);
    block12 = new Block(960,200,30,30);
    block13 = new Block(990,200,30,30);
    block14 = new Block(1020,200,30,30);
    block15 = new Block(1050,200,30,30);
    //second level blocks
    block16 = new Block(930,150,30,30);
    block17 = new Block(960,150,30,30);
    block18 = new Block(990,150,30,30);
    block19 = new Block(1020,150,30,30);
    //third level blocks
    block20 = new Block(960,100,30,30);
    block21 = new Block(990,100,30,30);
}
function draw(){
     Engine.update(engine);
    background(0);
    image(polygonIMG,polygon.position.x,polygon.position.y,30,30);
    //polygon.display();
    //first platform blocks
    ground.display();
    platf1.display();
    platf2.display();
    block02.display();
    block01.display();
    block0.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    //second platform blocks
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

     //imageMode(CENTER);
    //console.log(polygon);
    //image(polygonIMG, polygon.position.x,polygon.position.y,50,50);
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

