const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg, bgImg;
var ship;

function preload() {
    bgImg = loadImage("space.png");
    shipImg = loadImage("ship.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;

    ship = new Ship(400, 400, 40, 40, angle);

}


function draw() {
    background("blue");
    image(bgImg, 0, 0, width, height);

    ship.display();

    Engine.update(engine);


}