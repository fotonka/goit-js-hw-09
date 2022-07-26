function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startRef = document.querySelector('button, [data-start]');
const stopRef = document.querySelector('button, [data-stop]');
const body = document.querySelector('body');

startRef.addEventListener('click', startChanging);
stopRef.addEventListener('click', stopChanging);

function startChanging() {
  setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChanging() {
  clearInterval();
}
