class Box{
    
constructor(x,y,width,height){
    var options = {
        restitution: 0.4
       // isStatic: true
    }
    this.visibility = 255
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,options);
    
    World.add(world,this.body)
}
display(){
    var pos = this.body.position;
   // var angle = this.body.angle
   if(this.body.speed<4){
       push();
       translate(pos.x,pos.y)
    rectMode(CENTER);
    rect(0,0,this.width,this.height)
    pop();
   }
   else{
       World.remove(world,this.body);
       push();
       this.visibility-=5;
       tint(255,this.visibility);


       pop();
   }
    
}







}