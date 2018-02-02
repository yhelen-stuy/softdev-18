var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var h = c.getAttribute("height");
var w = c.getAttribute("width");
var sq_side = h / 25

var pi = Math.PI;

var toggleB = document.getElementById("toggle");
var clearB = document.getElementById("clear");

// Whether to draw a dot
var drawDot = true;

var changeDrawing = function(e) {
    e.preventDefault();
    drawDot = !drawDot;
}

var drawCircle = function(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, sq_side / 2, 0, 2 * pi);
    ctx.fillStyle = "#000000";
    ctx.stroke();
    ctx.fillStyle = "#ff0000";
    ctx.fill();
}

var drawSquare = function(x, y) {
    x -= (sq_side / 2)
    y -= (sq_side / 2)
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(x, y, sq_side, sq_side);
    // Draw outine
    ctx.fillStyle = "#000000";
    ctx.fillRect(x, y, sq_side, 1);
    ctx.fillRect(x, y, 1, sq_side);
    ctx.fillRect(x + sq_side - 1, y, 1, sq_side);
    ctx.fillRect(x, y + sq_side - 1, sq_side, 1);
}

var draw = function(e) {
    e.preventDefault();
    var x = e.offsetX;
    var y = e.offsetY;
    if (drawDot) {
        drawCircle(x, y);
    } else {
        drawSquare(x, y);
    }
}

var clearCanvas = function (e) {
    e.preventDefault();
    ctx.clearRect(0, 0, h, w);
}

clearB.addEventListener('click', clearCanvas);
toggleB.addEventListener('click', changeDrawing);

c.addEventListener('click', draw);
