    

var string = "0"
var operationAvailable = false;
var dpAvailable = true;
var memory = 0;
var lastChar = string.substring(string.length - 1);

function input(num) {
    switch (num) {
        case 0:
            if (string !== "0") {
                string += "0";
            }
            operationAvailable = true;
            break;
        case 1:
            if (string !== "0") {
                string += "1";
            } else {
                string = "1";
            }
            operationAvailable = true;
            break;
        case 2:
            if (string !== "0") {
                string += "2";
            } else {
                string = "2";
            }
            operationAvailable = true;
            break;
        case 3:
            if (string !== "0") {
                string += "3";
            } else {
                string = "3";
            }
            operationAvailable = true;
            break;
        case 4:
            if (string !== "0") {
                string += "4";
            } else {
                string = "4";
            }
            operationAvailable = true;
            break;
        case 5:
            if (string !== "0") {
                string += "5";
            } else {
                string = "5";
            }
            operationAvailable = true;
            break;
        case 6:
            if (string !== "0") {
                string += "6";
            } else {
                string = "6";
            }
            operationAvailable = true;
            break;
        case 7:
            if (string !== "0") {
                string += "7";
            } else {
                string = "7";
            }
            operationAvailable = true;
            break;
        case 8:
            if (string !== "0") {
                string += "8";
            } else {
                string = "8";
            }
            operationAvailable = true;
            break;
        case 9:
            if (string !== "0") {
                string += "9";
            } else {
                string = "9";
            }
            operationAvailable = true;
            break;
        case 10:
            if (operationAvailable == true) {
                string += "+";
                operationAvailable = false;
                update();
                dpAvailable = true;
            } else {

            }
            break;
        case 11:
            if (operationAvailable == true) {
                string += "-";
                operationAvailable = false;
                update();
                dpAvailable = true;
            } else {

            }
            break;
        case 12:
            if (operationAvailable == true) {
                string += "*";
                operationAvailable = false;
                update();
                dpAvailable = true;
            } else {

            }
            break;
        case 13:
            if (operationAvailable == true) {
                string += "/";
                operationAvailable = false;
                update();
                dpAvailable = true;
            } else {

            }
            break;
        case 14:
            if (dpAvailable == true) {
                if (lastChar == "+" ||
                    lastChar == "-" ||
                    lastChar == "*" ||
                    lastChar == "/") {
                    string += "0.";
                } else {
                    string += ".";

                }
            }
            dpAvailable = false;
            break;
    }
    update();
}

function calculate() {
    string = eval(string);
    update();
    dpAvailable = true;
    operationAvailable = true;
}

function memoryAdd() {
    eval(string);
    update();
    memory += eval(string);
}

function memorySubtract() {
    eval(string);
    update();
    memory -= eval(string);
}

function memoryRestore() {
    string = "";
    string = memory;
    update();
}

function memoryClear() {
    memory = 0;
}

function clearOutput() {
    string = "0";
    dpAvailable = true;
    update();
}

function bksp() {
    string = string.substring(0, string.length - 1);
    if (string == "") {
        string = "0";
    }
    update();
}

function root() {
    string = Math.sqrt(eval(string));
    update();
}

function reciproc() {
    string = 1 / (eval(string));
    update()
}

function update(num) {
    document.getElementById("output").innerHTML = string;
}