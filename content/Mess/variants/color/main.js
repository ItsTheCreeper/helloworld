
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
    this.r = Math.floor(Math.random() * 256);
    this.g = Math.floor(Math.random() * 256);
    this.b = Math.floor(Math.random() * 256);
	this.radius = (Math.floor(Math.random() * 275) + 25);
	this.gravity = 0;
	this.gravitySpeed = 0.2;
	this.bounce = 0.6;
	this.draw = function () {
		ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
		ctx.stroke();
	};
}

function thing() {
	myCircle = new Circle();
	myCircle.draw();
}

setInterval(function () { thing(); }, 10);
