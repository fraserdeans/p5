function setup() {
  createCanvas(640, 480);
  background(167);

  fill(255);

  var xPos = 0;
  var yPos = 0;

  var numberLines = height / 10;

  for( var i = 0; i < numberLines; i++ ) {
    line( xPos, yPos, width, yPos );

    yPos += 10;
  }
}

function draw() {
}
