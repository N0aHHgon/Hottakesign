function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  //help you to figure out where X and Y are
  //keep this on the bottom of the draw() function
  //so that is draws over your image
  
  stroke("white")
  strokeWeight(8)
  fill("green")
   rect(75,75,320,125,15)
  textStyle(NORMAL)
  noStroke()
  fill("white")
  text("Frank Ocean Retired",89,135)
  
  noStroke();
  textSize(30)
  fill("black")
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY + 10);
 
}

