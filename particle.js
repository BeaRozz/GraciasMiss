class Particle {
    constructor(x,y,r){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false,
        }
        this.r = r;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.Particle = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.Particle);
    }
    /*updateY(){
        if(this.Particle.position.y < this.Particle.height){
            Matter.Body.setPosition(this.Particle, {x:random(0, 800), y:random(0, 800)})
        }
    }*/
    
    display(){
        
        var pos = this.Particle.position;
        var angle = this.Particle.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}