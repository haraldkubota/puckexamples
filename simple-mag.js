// mag example

// This are the offset values read from MY mag
// Adjust for your own

var mag0={
  x: -2089,
  y: 2175,
  z: -889
};

// Read the mag and display the direction toward north
function readMag() {
  let a=Puck.mag();
  //console.log(a);
  a.x-=mag0.x;
  a.y-=mag0.y;
  a.z-=mag0.z;
  console.log(Math.atan2(a.y, a.x)*180/Math.PI);
}

// Print the mag reading once a second to the console

setInterval(readMag, 1000);
