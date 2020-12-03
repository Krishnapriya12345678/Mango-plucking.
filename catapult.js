class Catapult {
    constructor(bodyA,pointB){
        
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      this.pointB=pointB
      this.pult=Matter.Constraint.create(options)
      World.add(world,this.pult)
        
    }
fly(){
  this.pult.bodyA = null;
}
attach(stone){
  this.pult.bodyA=stone
    }

display(){
 

if(this.pult.bodyA){
 var pointA = this.pult.bodyA.position;
 var pointB = this.pointB;

line(pointA.x,pointA.y,pointB.x,pointB.y)

}
}

}































