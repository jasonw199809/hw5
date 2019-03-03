function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 10; i <= width / 2; i = i + 10) {
    line(200 - i, i, 200 + i, i);
  }
  
  for (var a = 10; a <= height; a = a + 10) {
    line(a, height/2+a, 400-a, height/2+a);
  }
}
