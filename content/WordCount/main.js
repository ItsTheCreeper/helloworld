

function check() {
    var val = document.getElementById("text").value;
    var count = 1;
    val.split();
    for (var i = 0; i < val.length; i++) {
        if (val[i] == " ") {
            count += 1;
        }
    }

    document.getElementById("count").innerHTML = count;
}