window.addEventListener("deviceorientation", handleOrientation, true);


let kuleczka   = document.querySelector('#kuleczka');
let stol = document.querySelector('#stol');
let output = document.querySelector('#output');

function handleOrientation() {
    
  let beta = event.beta; // góra dół
  let gamma = event.gamma; // lewo- prawo

  output.innerHTML = "beta :" + beta + "\n";
  output.innerHTML = "gamma :" + gamma + "\n";

  if(beta > 90) {
      beta = 90;
  }
  if(beta < -90) {
      beta = -90;
  }

  beta += 90;
  gamma += 90;
  //where ball can move
  ball.style.top  = (xMax*beta/90 - 15) + "px";
  ball.style.left = (yMax*gamma/90 - 15) + "px";

  //barrier on the field ball can't cross
  if(ball.style.top < 15) {
      ball.style.top = 15;
  }
  if(ball.style.bottom < 15) {
      ball.style.bottom = 15;
  }
  if(ball.style.right < 15) {
      ball.style.right = 15;
  }
  if(ball.style.left < 15) {
      ball.style.left = 15;
  }
}
//motion of phone
window.addEventListener('devicemotion', handleMotion, true);

function handleMotion() {

}

function koniec() {
  let dziura = document.querySelector('.dziura');
  let pozycjaDziury = dziura.getBoundingClientRect();
  let pozycjaKulki = ball.getBoundingClientRect();

  if((pozycjaKulki.top <= pozycjaDziury.top) && (pozycjaKulki.bottom >= pozycjaDziury.bottom) && (pozycjaKulki.left >= pozycjaDziury.left) &&
  (pozycjaKulki.right <= pozycjaDziury.right)) {
      alert("Koniec");
  }
}
