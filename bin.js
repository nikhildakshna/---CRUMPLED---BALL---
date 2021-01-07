class bin{
    constructor(x,y,width,height){
    
    var options = {
    isStatic: true,
    'restitution': 0.3,
    'friction': 1,
    'density': 2
    }

this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
this.image = loadImage("dustbingreen.png")

World.add(world,this.body);
}

display(){
var pos = this.body.position;

push();
translate(pos.x,pos.y);
rectMode(CENTER);
fill("");
rect(0,0,this.width,this.height);
pop();
imageMode(CENTER);
image(this.image,600,610,100,150);
}
}