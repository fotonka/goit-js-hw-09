import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onClick);
let choosedDate = null;
const today = new Date();

startBtn.setAttribute('disabled', true);

const timer = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    choosedDate = selectedDates[0].getTime();
    startBtn.removeAttribute('disabled');

    if (today > choosedDate) {
      window.alert('Please choose a date in the future');
      startBtn.setAttribute('disabled', true);
      location.reload();
    }

    return choosedDate;
  },
};

flatpickr('#datetime-picker', options);

function onClick(event) {
  let timerId = null;

  timerId = setInterval(() => {
    const deltaTime = choosedDate - Date.now();

    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    timer.days.textContent = days;
    timer.hours.textContent = hours;
    timer.minutes.textContent = minutes;
    timer.seconds.textContent = seconds;
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = padStart(Math.floor(ms / day));
  const hours = padStart(Math.floor((ms % day) / hour));
  const minutes = padStart(Math.floor(((ms % day) % hour) / minute));
  const seconds = padStart(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function padStart(value) {
  return String(value).padStart(2, '0');
}
