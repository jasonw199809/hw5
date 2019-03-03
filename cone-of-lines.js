function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 10; i <= 380; i = i + 10) {
    line(200, 20, i, 380);
}
}
