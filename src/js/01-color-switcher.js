function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', startChanging);
stopBtn.addEventListener('click', stopChanging);

let intervalId = null;
stopBtn.setAttribute('disabled', true);

function startChanging() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
}

function stopChanging() {
  clearInterval(intervalId);
  stopBtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');
}

//console.log(stopBtn);
//console.log(startBtn);
