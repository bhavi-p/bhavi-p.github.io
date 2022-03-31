const balls = document.getElementsByClassName('ball');
const eyes = document.getElementsByClassName('eyes');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

for (let i = 0; i < balls.length; i++){
 
  balls[i].style.left = x;
  balls[i].style.top = y;
  balls[i].transform = 'translate(-' + x + ',-' + y + ')';
}
};

document.onclick = (event) => {
  let addEye = eyes[0];
  let newEye = document.createElement('div').classList.add('eye');
  let newBall = document.createElement('div').classList.add('ball');
  // newEye.appendChild(newBall);
  addEye.appendChild(newEye);
};
  
