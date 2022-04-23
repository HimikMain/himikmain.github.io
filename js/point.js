function Point(x, y, r){
	var options = {
		isStatic: true,
		restitution: 0.24,
		friction: 0
	}
	this.body = Bodies.circle(x, y, r, options);
	this.r = r;
	World.add(world, this.body);


}

Point.prototype.show = function() {
	fill(0, 255, 0);
	strokeWeight(0);
	var pos = this.body.position;
	push();
	translate(pos.x, pos.y);
	ellipse(0, 0, this.r*2);
	pop();
}