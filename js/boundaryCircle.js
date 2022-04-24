function BoundaryCircle(x, y, r){
	var options = {
		isStatic: true
	}
	this.body = Bodies.circle(x, y, r, options);
	this.body.collisionFilter = {
  		'group': 1,
  		'category': 2,
 		'mask': 2,
	};
	this.r = r;
	World.add(world, this.body);
}

BoundaryCircle.prototype.show = function() {
	fill(255, 0, 0);
	stroke(255);
	var pos = this.body.position;
	push();
	translate(pos.x, pos.y);
	rectMode(CENTER);
	circle(0, 0, this.r*2);
	pop();
}