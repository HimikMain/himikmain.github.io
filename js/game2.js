var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World;

    var engine;
    var world;
    var particles = [];
    var points = [];
    var bounds = [];
    var cols = 20;

    var widthCanvas = 640;
    var heightCanvas = 640;
    var xCanvas = (window.screen.availWidth - widthCanvas)/2;
    var yCanvas = (window.screen.availHeight - heightCanvas)/2;
    var spacing = widthCanvas/cols;

function setup() {
    var cnv = createCanvas(widthCanvas, heightCanvas);
    cnv.position(xCanvas, yCanvas);
    engine = Engine.create();
    world = engine.world; 
    world.gravity.y = 1.44;
    spacing = widthCanvas/cols;
    for (var i = 3; i < cols; i++){
        var x = 0 + spacing/2;
        var y = i * spacing - spacing/2;
        for (var k = i; k < cols; k++) {
            x += spacing/2;
        }
        for (var j = 1; j <= i; j++) {
            var p = new Point(x, y, 60/cols);
            points.push(p);  
            x += spacing;
        }      
    }

    var down = new Boundary(widthCanvas/2, heightCanvas + 50, widthCanvas, 100);
    var left = new Boundary(spacing - 4, spacing, 4, heightCanvas*2);
    var right = new Boundary(widthCanvas - spacing , spacing, 4, heightCanvas*2);
    bounds.push(down);
    bounds.push(left);
    bounds.push(right);

    for (var i = 0; i < cols + 2; i++){
        var x = i * spacing - 1;
        var h = 2.5 * spacing;
        var w = 2;
        var y = heightCanvas - h / 2;
        var b = new Boundary(x, y, w, h);
        bounds.push(b);
    }
}

function newParticle(){
    var p = new Particle(widthCanvas/2, 360/cols, spacing/4 - 3);
    particles.push(p);
}

function draw() {
    background(51);
    Engine.update(engine);
    for (var i = 0; i < particles.length; i++){
        particles[i].show();
    }
    for (var i = 0; i < points.length; i++){
        points[i].show();
    }
}