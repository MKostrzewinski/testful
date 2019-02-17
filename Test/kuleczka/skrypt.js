window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    let absolute = event.absolute;
    let alpha    = event.alpha;
    let beta     = event.beta;
    let gamma    = event.gamma;
  }

let kuleczka   = document.querySelector('#kuleczka');
let stol = document.querySelector('#stol');
let output = document.querySelector('#output');

let maxX = stol.clientWidth  - kuleczka.clientWidth;
let maxY = stol.clientHeight - kuleczka.clientHeight;

function handleOrientation(event) {
  let x = event.beta;  // In degree in the range [-180,180]
  let y = event.gamma; // In degree in the range [-90,90]

  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  // To make computation easier we shift the range of 
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the kuleczka
  // It center the positioning point to the center of the kuleczka
  kuleczka.style.top  = (maxX*x/180 - 10) + "px";
  kuleczka.style.left = (maxY*y/180 - 10) + "px";
}

window.addEventListener('deviceorientation', handleOrientation);