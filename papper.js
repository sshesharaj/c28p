class Paper{
constructor(){
var option={
restution:0.3,
friction:.5,
density:1.2
}
this.body = Bodies.circle(50,650,20,options)
World.add(world,this.body)

}
display(){
push ()
translate (thuis.body.position.x,this.body.position.y)
rotate (this.body.angle)
fill ("blue")
ellipse (0,0,40,40)
pop ()
}


}