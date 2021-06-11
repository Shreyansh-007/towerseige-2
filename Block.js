class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      World.add(world, this.body);
      this.visiblility = 255
    }
    display(){
      var pos= this.body.position;
      console.log(this.body.speed)
      if(this.body.speed<3){
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 30, 40);
      }
      else{
        push ()
        World.remove(world, this.body);
        imageMode(CENTER)
        tint(255,this.visiblility)
        this.visiblility = this.visiblility-5
        image(this.image, pos.x, pos.y, 30, 40);
        pop()
      }
     
    }
}