class Ground{
    
constructor(x,y,width,height){
    var options = {
        isStatic: true
    }
    this.width=width;
    this.height=height;
    this.ground=Bodies.rectangle(x,y,width,height,options);
    
    World.add(world,this.ground)
}
display(){
    var pos = this.ground.position;
      push();
    translate(pos.x,pos.y)
    
fill("brown")
    rectMode(CENTER);
    rect(0,0,this.width,this.height)


    pop();
}







}