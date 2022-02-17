class Rope {
    constructor(body1,body2,offsetX,offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = Constraint.create(options);
    World.add(world,this.rope);
    


    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);

        var a1 = pointA.x;
        var a2 = pointA.y;
 
        var b1 = pointB.x+this.offsetX;
        var b2 = pointB.y+this.offsetY;

        line (a1,a2,b1,b2);


    }
  };
