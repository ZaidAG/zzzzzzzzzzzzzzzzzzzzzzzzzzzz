class Paper{
    constructor(x,y,radius){
      var options={
          isStatic:false,
          resititution:0,
          friction:0.5,
          density:1.2
      }
    this.radius=radius;
    this.body=Matter.Bodies.circle(x,y,this.radius,options)
    this.image=loadImage("sprites/paper.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke("black");
    imageMode(CENTER);
    image(this.image,0,0,this.radius);
    pop();
  }
};