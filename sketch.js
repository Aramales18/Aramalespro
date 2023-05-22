//The setup function only happens once
var mic;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
    mic = new p5.AudioIn();
    mic.start();
}

//The draw function happens over and over again
function draw() {
var vol = mic.getLevel();
  background(200,0,0); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/ 2, height/ 2, vol*100); // center of canvas, 20px dia
}
