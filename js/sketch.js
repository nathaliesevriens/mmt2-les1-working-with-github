//scope var

//variabelen "leven" aleen binnen de functie waarin ze zijn geplaatst

 var xPos = 10; //global variable

function setup() {

    createCanvas(600, 400);
    
   
}



function draw() {


var colorR = 255;
var colorG = 150;
var colorB = 200;


xPos = xPos * 1.01;

var newColor = map(mouseX, 0, width, 0, 255);

    background(newColor, colorG, colorB);

ellipseMode(CORNER);
ellipse (xPos, 40, 80, 80)
}