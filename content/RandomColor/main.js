// color array
var rgb = [0, 0, 0];
// sliders
var r = document.getElementById("r"); 
var g = document.getElementById("g");
var b = document.getElementById("b");
// values ons-creen
var rv = document.getElementById("rv"); 
var gv = document.getElementById("gv");
var bv = document.getElementById("bv");

function color() {
    // set random values for rgb
    for (var i = 0; i < 3; i++) {
        rgb[i] = Math.floor(Math.random() * 255);
    }
    // set rgb as background of webpage
    change();
    // update slider values
    r.value = rgb[0];
    g.value = rgb[1];
    b.value = rgb[2];
    // update on-screen values
    rv.innerHTML = rgb[0];
    gv.innerHTML = rgb[1];
    bv.innerHTML = rgb[2];
}

// update the color thru slider
r.oninput = function () {
    // set value of red
    rgb[0]  = r.value;
    // change background
    change();
    // display new value
    rv.innerHTML = rgb[0];
};

g.oninput = function () {
    // set value of green
    rgb[1]  = g.value;
    // change background
    change();
    // display new value
    gv.innerHTML = rgb[1];
};

b.oninput = function () {
    // set value of blue
    rgb[2]  = b.value;
    // change background
    change();
    // display new value
    bv.innerHTML = rgb[2];
};

// update background
function change() {
    document.getElementById("color").style.backgroundColor = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
}
