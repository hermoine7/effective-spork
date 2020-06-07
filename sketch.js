

const Engine = Matter.Engine;
const   World = Matter.World;
const  Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine;
var world;
var boxes = [];
 

var gSlider;
 
function setup() {
    createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    ground1= new ground(600,height,800,20)
    box1 = new box(350,760,45,50);
     box2 = new box(400,760,45,50);
      box3 = new box(450,760,45,50);
       box4 = new box(500,760,45,50); 
       box5 = new box(550,760,45,50);
        box6 = new box(600,760,45,50);
         box7 = new box(650,760,45,50);

         box8 = new box(375,710,45,50); 
         box9 = new box(425,710,45,50); 
         box10 = new box(475,710,45,50);
          box11 = new box(525,710,45,50);
           box12 = new box(575,710,45,50); 
           box13 = new box(625,710,45,50);

           box14= new box(400,660,45,50);
           box15= new box(450,660,45,50);
           box16= new box(500,660,45,50);
           box17= new box(550,660,45,50);
           box18= new box(600,660,45,50);

           box19= new box(425,610,45,50);
           box20= new box(475,610,45,50);
           box21= new box(525,610,45,50);
           box22= new box(575,610,45,50);

           box23= new box(450,560,45,50);
           box24= new box(500,560,45,50);
           box25= new box(550,560,45,50);

           box26= new box(475,510,45,50);
           box27= new box(525,510,45,50);

           box28= new box(500,460,45,50);


           spbox= new box(100,500,80,80);
           sling1=new sling(spbox.body,{x:100,y:500});

}
 

 
function draw() {
    background(0);
    Engine.update(engine);
    box1.display();
     box2.display();
     box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    sling1.display();
    spbox.display();
}
 
function mouseDragged(){
    Matter.Body.setPosition(spbox.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}
