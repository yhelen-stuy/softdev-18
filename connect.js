var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var clearB = document.getElementById("clear");
var toggleB = document.getElementById("toggle");

var h = c.getAttribute("height");
var w = c.getAttribute("width");
var r = h / 50;

var pi = Math.PI;

var cX = -1;
var cY = -1;

var drawCircle = function(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * pi);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.moveTo(x, y);
}

var connect = function(x0, y0, x1, y1) {
    ctx.beginPath();
    ctx.strokeStyle = "#0000ff";
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}

var draw = function(e) {
    e.preventDefault();
    if (cX < 0 || cY < 0) {
        cX = e.offsetX;
        cY = e.offsetY;
    } else {
        var x = e.offsetX;
        var y = e.offsetY;
        connect(cX, cY, x, y);
        cX = x;
        cY = y;
    }
    drawCircle(cX, cY);
}

var reset = function() {
    cX = -1;
    cY = -1;
}

var clearCanvas = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, h, w);
    reset();
}

clearB.addEventListener('click', clearCanvas);

c.addEventListener('click', draw);
