class Slingshot{

constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:1.5,
length:100
}
this.pointB=pointB;
this.rope=Constraint.create(options);
World.add(world,this.rope);
}

display(){
var pointA=this.rope.bodyA.position;
var pointB=this.pointB;
strokeWeight(5);
stroke(0);
fill("orange")
line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}