
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
	this.draw = function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fillStyle = "yellow";
	};
}

function thing() {
	myCircle = new Circle();
	myCircle.draw();
}

setInterval(function () { thing(); }, 100);
