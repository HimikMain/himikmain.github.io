function start () {

        var context;
        var dx= 4;  
        var dy=4;
        var y=150;
        var x=10;
        function draw(){
            context= myCanvas.getContext('2d');
            context.clearRect(0,0,400,400);
            context.beginPath();
            context.fillStyle="#000000";
            context.arc(x,y,10,0,Math.PI*2,true);
            context.closePath();
            context.fill();
            if( x<0 || x>400)
            dx=-dx;
            if( y<0 || y>300)
            dy=-dy;
            x+=dx;
            y+=dy;
        }
        setInterval(draw,10); 
}