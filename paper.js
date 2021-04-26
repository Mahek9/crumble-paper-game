class Paper{
    constructor(x,y,radius){
        var options={
       isStatic:false,
       restruction:0.3,
       friction:0.5,
       density:1.4
        }
     this.x=x;
     this.y= y;
     this.radius=radius;
        this.body=Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body);
   // Matter.Bodies.circle(x.y,radius,options,maxSides);
    
    
    }
    display(){
        var pos =this.body.position;
      //  var angle=this.angle.position
      push();
      translate (pos.x,pos.y);
      strokeWeight(3);
      fill("pink");
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius);
      pop();

    }
    
    
}