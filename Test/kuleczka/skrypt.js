let ball   = document.querySelector('.ball');
let hole   = document.querySelector('.hole');
let garden = document.querySelector('.garden');
let output = document.querySelector('.output');

let czasStart = Date.now();

let maxX = garden.clientWidth  - ball.clientWidth;
let maxY = garden.clientHeight - ball.clientHeight;

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

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top  = (maxX*x/90 - 1) + "px";
  ball.style.left = (maxY*y/90 - 1) + "px";
  
   if(ball.style.top < 10) {
        ball.style.top = 10;
    }
    if(ball.style.bottom < 10) {
        ball.style.bottom = 10;
    }
    if(ball.style.right < 10) {
        ball.style.right = 10;
    }
    if(ball.style.left < 10) {
        ball.style.left = 10;
    }
    let ballPosition = ball.getBoundingClientRect();
    let holePosition = hole.getBoundingClientRect();
  
  
    function koniec(){

        let ballPosition = ball.getBoundingClientRect();
        let holePosition = hole.getBoundingClientRect();
      
      
        if((ballPosition.top <= holePosition.top) && (ballPosition.bottom >= holePosition.bottom) && (ballPosition.left >= holePosition.left) &&
        (ballPosition.right <= holePosition.right)) {
            czas = Date.now() - czasStart;
            alert("Wygrana! \n Twój czas : " + czas);
        }
      
    }
}








window.addEventListener('deviceorientation', handleOrientation);
