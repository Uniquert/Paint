var mouseEvent = ""
canvas =
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "red";
var radius = 20;
var width_of_the_line = 4;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = getElementById("color").value;
    width_of_the_line = getElementById("width_of_the_line").value;
    radius = getElementById("radius").value;

    ctx.beginPath();
    ctx.strokeStyle();
    ctx.lineWidth();
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    var mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    color = getElementById("color").value;
    width_of_the_line = getElementById("width_of_the_line").value;
    radius = getElementById("radius").value;

    var mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    color = getElementById("color").value;
    width_of_the_line = getElementById("width_of_the_line").value;
    radius = getElementById("radius").value;

    var mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemouse(e) {

    current_position_of_mouse_x = e.clientX - canvas.offestLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates ="); 
        console.log(" x = " + current_position_of_mouse_x + "y = " + 
     current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle();
        ctx.lineWidth();
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}



