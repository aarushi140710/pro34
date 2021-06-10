class Monster extends BaseClass {
       constructor(){
           this.body = Bodies.rectangle(x,y,width,height);
           this.image = loadImage("Monster-01.png");
       }
       
      display(){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width*2, this.height*2);
    }
}