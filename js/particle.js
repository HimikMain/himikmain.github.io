function Particle(x, y, r, cols){
	var options = {
		restitution: 0.36,
		friction: 0,
		density: 0.01
	}
	var rand = random(-120/cols, 210/cols);
	while(rand < 1 && rand > -1) {
		rand = random(-120/cols, 120/cols);
	}
	x += rand;
	this.body = Bodies.circle(x, y, r, options);
	var randGroup = random(1, 65535);
	this.body.collisionFilter = {
  		'group': -1,
  		'category': 2,
 		'mask': 2,
	};
	this.r = r;
	var randOpacity = random(0.24, 1);
	this.randOpacity = randOpacity;
	World.add(world, this.body);
}

Particle.prototype.show = function() {
	fill('rgba(255, 255, 255, ' + this.randOpacity + ')');
	stroke(255);
	var pos = this.body.position;
	push();
	translate(pos.x, pos.y);
	ellipse(0, 0, this.r*2);
	pop();
}