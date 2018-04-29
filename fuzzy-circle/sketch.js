var bubbles = [];
const NUMBER_BUBBLES = 2000;

function setup() {
  var body = document.getElementsByTagName('body')[0]
  body.style.background = 'black';


  angleMode(DEGREES)
  createCanvas( 600, 600 );
  fill( 0 );

  var canvasBubble = new CanvasBubble();

  for(var i=0; i<NUMBER_BUBBLES; i++) {
    var bubble = new Bubble();

    if( canvasBubble.contains( bubble ) ) {

      if( bubbles.length === 0 ) {
        bubbles.push( bubble );
        bubble.show();
      } else {

        var intersection = false;

        for( var otherBubble of bubbles ) {
          if( bubble.intersects( otherBubble ) ) {
            intersection = true;
            break;
          }
        };

        if( intersection ) {
          delete bubble;
          i--;
        } else {
          bubbles.push( bubble );
          bubble.show();
        }
      }

    } else {
      delete bubble;
      i--;
    }
  }
}

function draw() {

}

function CanvasBubble() {
  this.x = width/2;
  this.y = height/2;
  this.r = width;

  noStroke();
  ellipse( this.x, this.y, this.r );

  this.contains = ( bubble ) => {
    var d = dist( this.x, this.y, bubble.x, bubble.y );
    return d < ( ( this.r / 2 ) - bubble.r );
  }
}

function Bubble() {
  this.x = random( width );
  this.y = random( height );
  this.r = random( 5, 15 );

  this.show = () => {
    noStroke();
    noFill();
    // fill( 255, random(100, 200) );
    ellipse( this.x, this.y, this.r );

    // LINE
    var angle = random( 180 );
    var reverseAngle = angle + 180;
    var radius = this.r / 2;

    var lineX1 = radius * sin( angle );
    var lineY1 = radius * cos( angle );
    var lineX2 = radius * sin( reverseAngle );
    var lineY2 = radius * cos( reverseAngle );

    lineX1 = this.x + lineX1;
    lineY1 = this.y + lineY1;
    lineX2 = this.x + lineX2;
    lineY2 = this.y + lineY2;

    stroke( 150, random(100, 200) );
    strokeWeight(2);
    line( lineX1, lineY1, lineX2, lineY2 );
  }

  this.intersects = ( other ) => {
    var d = dist( this.x, this.y, other.x, other.y );
    return d < ( this.r + other.r ) / 2;
  }
}
