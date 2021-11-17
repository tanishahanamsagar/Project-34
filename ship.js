class Ship {
    constructor(x, y, width, height) {
        this.Body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.shipPosition = shipPos;
        this.image = loadImage("./assets/ship.png");
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(0, 0, width, height);
        pop();
    }
}