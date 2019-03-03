function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  for (var i = 10; i <= 390; i = i + 15) {
    ellipse(width/2, height/2, 10 + (380 - i),10 + (380 - i));
  }
}
