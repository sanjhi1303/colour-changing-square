let squareSize = 100; 
let squareColor;      

function setup() {
  createCanvas(400, 400); 
  rectMode(CENTER);       
  squareColor = color(255);
}

function draw() {
  background(0); 
  fill(squareColor); 
  rect(width / 2, height / 2, squareSize, squareSize); 
}

function mousePressed() {
  if (mouseX > width / 2 - squareSize / 2 && mouseX < width / 2 + squareSize / 2 &&
      mouseY > height / 2 - squareSize / 2 && mouseY < height / 2 + squareSize / 2) {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    squareColor = color(r, g, b);  
  }
}