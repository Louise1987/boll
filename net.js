
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

var offset = 20;
var nrOfDots = 500;
var multiplier = 20;
var radius = 200;
var dotSize = 4;
var dots = [];

draw()

function draw() {
    drawOutlineCircle();
    drawOutlineDots();
    drawLines(context);
}

function drawOutlineCircle() {
    context.strokeStyle = "lightgrey";
    context.beginPath();
    context.arc(radius+offset, radius+offset, radius, 0, Math.PI * 2);  // Outer cirkle
    context.stroke(); 
}

function drawOutlineDots() {
    context.fillStyle = "green";
    for(var i = 0; i < nrOfDots; i++) {
        var y = offset + radius + radius * Math.cos(2 * Math.PI * i / nrOfDots) * -1;
        var x = offset + radius + radius * Math.sin(2 * Math.PI * i / nrOfDots); 

        context.beginPath();
        context.arc(x, y, dotSize, 0, Math.PI * 2); //Outer cirkle
        context.fill();

        dots [i] = {
            x: x,
            y: y
        };
    }

}    

function drawLines(context) {
    console.log(dots);
    for(var i = 0; i < dots.length; i++) {
        var lineStart = dots[i];
        var lineEnd = dots[(i * multiplier)%nrOfDots];

        
        context.beginPath();
        context.moveTo(lineStart.x, lineStart.y);
        context.lineTo(lineEnd.x, lineEnd.y);
        context. stroke();
    }
}