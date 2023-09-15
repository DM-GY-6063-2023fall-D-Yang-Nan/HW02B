let width = 700;
let height = 900;
let rect1X = 50;
let rect1Y = 130;
let blueRectX = rect1X+50;
let blueRectY = rect1Y-8;
let ellipseX = 470;
let ellipseY = 360;
let brownRectX = ellipseX+60;
let brownRectY = ellipseY-120;
let yellowRectX = brownRectX+35;
let yellowRectY = brownRectY+70; 

function setup() {
    createCanvas(width,height);
}

function draw() {
    background(255);
    strokeWeight(1);
    stroke(0);
    noFill();
    rect(0,0,width,height);
    
    // rect1
    fill(42,52,52);
    noStroke();
    quad(rect1X,rect1Y,rect1X+15,rect1Y+20,rect1Y+35,rect1X+30,rect1Y+20,rect1X+10);
    
    //buleRect
    fill(65,98,182);
    quad(blueRectX,blueRectY,blueRectX+100,blueRectY+200,blueRectX+270,blueRectY+80,blueRectX+120,blueRectY-80);
    // quad(blueRectX,blueRectY,0,0,0,0,0,0);

    //ellipse
    stroke(129,78,60);
    strokeWeight(10);
    noFill();
    ellipse(ellipseX,ellipseY,70,70);

    //brownRect
    fill(129,78,60);
    noStroke();
    rect(brownRectX,brownRectY,70,70);
    
    //yellowRect
    fill(228,187,77);
    noStroke();
    rect(yellowRectX,yellowRectY,100,140);

    //rect2
    fill(42,52,52);
    noStroke();
    rect(220,500,320,320);




}
