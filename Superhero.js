class Superhero{
    constructor(x, y,width, height) {
        var options = {
          isStatic:true,
          density : 0.1,
          friction : 0.4,
          restitution : 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Superhero-01.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width*2, this.height);
        pop();
      }
}