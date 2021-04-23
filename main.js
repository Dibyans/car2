canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 150;
rover_height = 90;

background_image ="https://i.postimg.cc/bv5d35nK/racing.jpg",
rover_img = "https://i.postimg.cc/YqdnnNX1/car1.png";
rover_2_img = "https://i.postimg.cc/YqdnnNX1/car1.png";


rover_x = 10;
rover_y = 10;
rover_2_x = 10;
rover_2_y = 120;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;

    rover_2_imgTag = new Image();
    rover_2_imgTag.onload = uploadrover2;
    rover_2_imgTag.src = rover_2_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
 }
 function uploadrover2(){
    ctx.drawImage(rover_2_imgTag, rover_2_x, rover_2_y, rover_width, rover_height);
 }
 
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}