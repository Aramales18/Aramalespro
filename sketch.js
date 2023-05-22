var canvas;
var mic;

<a class="button button5" href="index.html">home</a>

function setup() {
canvas=createcanvas(400, 400);
  canvas.position(0,0);
  canvas.style('z-index', '-1')
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(175);
  var vol=mic.getLevel();
  ellipse(width/2, height/2, vol*100)

}
