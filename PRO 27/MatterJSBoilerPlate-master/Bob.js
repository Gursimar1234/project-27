class Bob {
    constructor(x,y) {
        var options = {

            isStatic : true,
            restitution : 1,
            friction : 0,
            density : 0.8,
        }
        this.r = 40;
        this.body = Bodies.circle(x,y,this.r,options);
  
        World.add(world,this.body);
        
        
    }
    display(){
        var pos =this.body.position;
     //   var angle = this.body.angle;
       push ();
       translate (pos.x,pos.y);
    //     rotate (angle);
    //   imageMode (CENTER);
    // noStroke ();
      fill ("blue");
      ellipseMode(RADIUS);
      ellipse (0,0,this.r,this.r);
      pop ();
      
  
      }
}