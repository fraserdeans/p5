var bubbles = [];
const NUMBER_BUBBLES = 200;

function setup() {
  angleMode(DEGREES)
  createCanvas( 800, 800 );
  // fill( 0 );

  var c = new Circle();
  c.drawLine();
}

function draw() {

}

function Circle() {
  this.x = width/2;
  this.y = height/2;
  this.r = width;

  // noStroke();
  ellipse( this.x, this.y, this.r );

  this.drawLine = () => {
    // noStroke();

    // LINE
    var angle = random( 180 );
    var reverseAngle = angle + 180;
    var radius = this.r / 2;

    console.log('ANGLES', angle, reverseAngle );

    var lineX1 = radius * sin( angle );
    var lineY1 = radius * cos( angle );
    var lineX2 = radius * sin( reverseAngle );
    var lineY2 = radius * cos( reverseAngle );

    console.log( lineX1, lineY1, lineX2, lineY2 )

    lineX1 = this.x + lineX1;
    lineY1 = this.y + lineY1;

    lineX2 = this.x + lineX2;
    lineY2 = this.y + lineY2;

    stroke('red');
    strokeWeight(8);
    point( lineX1, lineY1 );
    point( lineX2, lineY2 );

    line( this.x, this.y, lineX2, lineY2 );
    line( lineX1, lineY1, lineX2, lineY2 );
  }

}
