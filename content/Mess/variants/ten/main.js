
var myCircles = [];
var myCircle;

var canvas = document.getElementById("canvas");
canvas.width = document.body.clientWidth;
canvas.height = window.screen.availHeight;
var width = canvas.width;
var height = canvas.height;
var ctx = canvas.getContext("2d");

function Circle() {
    this.x = Math.floor(Math.random() * width);
    this.y = Math.floor(Math.random() * height);
    this.radius = (Math.floor(Math.random() * 275) + 25);
    this.gravity = 0;
    this.gravitySpeed = 0.2;
    this.bounce = 0.6;
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        ctx.stroke();
    };
}

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function thing() {
    if (myCircles.length == 10) {
        myCircles.shift();
        myCircle = new Circle();
        myCircles.push(myCircle);
        clearScreen();
        for (var i = 0; i < myCircles.length; i++) {
            myCircles[i].draw();
        }
    } else {
        myCircle = new Circle();
        myCircles.push(myCircle);
        for (var i = 0; i < myCircles.length; i++) {
            myCircles[i].draw();
        }
    }
}

setInterval(function () { thing(); }, 100);