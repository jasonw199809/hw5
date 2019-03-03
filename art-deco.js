function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(255)

  for (x = 50; x <= width - 50; x += 100) {
    for (i = 10; i <= 70; i += 15) {
      rectMode(CENTER);
      square(x, height / 2, 10 + (70 - i))
    }
  }
}
