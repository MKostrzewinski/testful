let ball   = document.querySelector('.ball');
let hole   = document.querySelector('.hole');
let garden = document.querySelector('.garden');
let output = document.querySelector('.output');

let czasStart = Date.now();

let maxX = garden.clientWidth  - ball.clientWidth;
let maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  let x = event.beta; 
  let y = event.gamma; 

  if (x >  90) { x =  90};  //ma zapobiec sytuacji kiedy telefon musi być do góry nogami
  if (x < -90) { x = -90};

  x += 90;
  y += 90;

  ball.style.top  = (maxX*x/90 - 10) + "px";
  ball.style.left = (maxY*y/90 - 10) + "px";
  
   if(ball.style.top < 10) {       //te ify mają blokować kuleczke na ściankach
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
}



  let ballPosition = ball.getBoundingClientRect();           // pobiera pozycje z elementu ball
  let holePosition = hole.getBoundingClientRect();              // pobiera położenie elementu hole


  if((ballPosition.top <= holePosition.top) && (ballPosition.bottom >= holePosition.bottom) && (ballPosition.left >= holePosition.left) &&
  (ballPosition.right <= holePosition.right)) {
      let czas = Date.now() - czasStart;
      alert("Wygrana! \n Twój czas : " + czas);
  }




window.addEventListener('deviceorientation', handleOrientation);
