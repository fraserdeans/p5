var stars = [];

function setup() {
  createCanvas(800, 800);

  fill(255);

  for( var i = 0; i < 800; i++ ) {
    stars.push( new Star() );
  }
}

function draw() {
  background( 0 );

  translate( width/2, height/2 );

  for( var i = 0; i < stars.length; i++ ) {
    stars[i].update();
    stars[i].show();
  }

}


function Star() {
  var x = random( -width, width );
  var y = random( -height, height );
  var z = random( width );

  var size = random( 2, 20 );

  this.show = function() {
    fill( 255 );
    noStroke();

    var sx = map( x / z, 0, 1, 0, width );
    var sy = map( y / z, 0, 1, 0, height );

    var r = map( z, 0, width, 16, 0 );

    ellipse( sx, sy, r, r );
  }

  this.update = function() {
    z = z - 10;

    if ( z < 1 ) {
      z = width;
      x = random( -width, width );
      y = random( -height, height );
    }
  }
}
