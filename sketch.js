var radius;
var height;
var h = 0;
var bg = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  noStroke();
}

function draw() {
  background(bg);
  //logo drawn  here:
  fill(h+7,75,255);
  rect(width/2+15, height/2-35, 35-15, 70);
  fill(h+10, 75, 255);
  triangle(width/2+35+5, height/2, width/2+80, height/2+35,  width/2+80, height/2-35);
  fill(h,100,255);
  ellipse(width/2-25, height/2, 70, 70);
  fill(bg);
  ellipse(width/2-25, height/2, 20, 20);
  h+=0.5; //make rainbow colors change
  if (h>=100) {
	h=0;
  }
}
//0, 1, 1, 2, 4, 6, 10, 16
