var rope1,rope2,rope3,rope4;
var ball1,ball2,ball3,ball4;

var engine;
function setup() {
    createCanvas(3000,800)
    engine = Engine.create();
    Engine = engine.create();
    rope1 = new Rope();
    rope2 = new Rope();
    rope3 = new Rope();
    rope4 = new Rope();
    ball1 = new Ball();
    ball2 = new Ball();
    ball3 = new Ball();
    ball4 = new Ball();

    
       
}
function draw() {
    cradle1.display();
    cradle2.display();
    cradle3.display();
    cradle4.display();
    cradle5.display();
}