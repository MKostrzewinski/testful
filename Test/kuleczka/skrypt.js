window.addEventListener("deviceorientation", handleOrientation, true);


let kuleczka   = document.querySelector('.kuleczka');
let stol = document.querySelector('.stol');
let output = document.querySelector('.output');

let xMax = area.clientWidth - kuleczka.clientWidth;
let yMax = area.clientHeight - kuleczka.clientHeight;

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
  //where kuleczka can move
  kuleczka.style.top  = (xMax*beta/90 - 15) + "px";
  kuleczka.style.left = (yMax*gamma/90 - 15) + "px";

  //barrier on the field kuleczka can't cross
  if(kuleczka.style.top < 15) {
      kuleczka.style.top = 15;
  }
  if(kuleczka.style.bottom < 15) {
      kuleczka.style.bottom = 15;
  }
  if(kuleczka.style.right < 15) {
      kuleczka.style.right = 15;
  }
  if(kuleczka.style.left < 15) {
      kuleczka.style.left = 15;
  }
}
//motion of phone
window.addEventListener('devicemotion', handleMotion, true);

function handleMotion() {

}

function koniec() {
  let dziura = document.querySelector('.dziura');
  let pozycjaDziury = dziura.getBoundingClientRect();
  let pozycjaKulki = kuleczka.getBoundingClientRect();

  if((pozycjaKulki.top <= pozycjaDziury.top) && (pozycjaKulki.bottom >= pozycjaDziury.bottom) && (pozycjaKulki.left >= pozycjaDziury.left) &&
  (pozycjaKulki.right <= pozycjaDziury.right)) {
      alert("Koniec");
  }
}
