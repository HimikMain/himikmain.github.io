var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World;

    var engine;
    var world;
    var particles = [];
    var points = [];
    var bounds = [];
    var cols = 13;

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
    spacing = widthCanvas/cols;
    for (var i = 3; i < cols; i++){
        var x = 0 + spacing/2;
        var y = i * spacing - spacing/2;
        for (var k = i; k < cols; k++) {
            x += spacing/2;
        }
        for (var j = 1; j <= i; j++) {
            var p = new Point(x, y, spacing/3 - 3);
            points.push(p);  
            x += spacing;
        }      
    }

    var down = new Boundary(widthCanvas/2, heightCanvas + 50, widthCanvas, 100);
    var left = new Boundary(spacing/2 + spacing/3 - 3, spacing, 4, heightCanvas*2);
    var leftCircle = new BoundaryCircle(spacing - spacing/3 + 3, heightCanvas - 2*spacing, spacing/5);
    var right = new Boundary(widthCanvas - (spacing/2 + spacing/3 - 3), spacing, 4, heightCanvas*2);
    var rightCircle = new BoundaryCircle(widthCanvas - (spacing - spacing/3 + 3), heightCanvas - 2*spacing, spacing/5);
    bounds.push(down);
    bounds.push(left);
    bounds.push(leftCircle);
    bounds.push(right);
    bounds.push(rightCircle);

    for (var i = 0; i < cols + 2; i++){
        var x = i * spacing;
        var h = spacing;
        var w = 2;
        var y = heightCanvas - h / 2;
        var b = new Boundary(x, y, w, h);
        bounds.push(b);
    }
}

function newParticle(){
    var p = new Particle(widthCanvas/2, 360/cols, spacing/4 - 3, cols);
    particles.push(p);
}

function setCols(numCols){
    cols = numCols;
    clearCanvas();
    setup();
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

function clearCanvas (){
    bounds = [];
    particles = [];
    points = [];
}