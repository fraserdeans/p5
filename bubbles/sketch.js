var bubbles = [];

function setup() {
  createCanvas( 800, 800 );
  fill( 255 );

  var canvasBubble = new CanvasBubble();

  for(var i=0; i<2500; i++) {
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
  this.r = random( 200 );

  this.show = () => {
    noStroke();
    fill( random(255), random(255), random(255) );
    ellipse( this.x, this.y, this.r );
  }

  this.hide = () => {
    noStroke();
    noFill();
  }

  this.intersects = ( other ) => {
    var d = dist( this.x, this.y, other.x, other.y );
    return d < ( this.r + other.r ) / 2;
  }
}
