import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const buttonRef = document.querySelector('button, [data-start]');
const inputRef = document.querySelector('#datetime-picker');

const today = new Date();
buttonRef.setAttribute('disabled', true);

flatpickr('input[type=text]', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (today < selectedDates[0]) {
      buttonRef.setAttribute('disabled', false);
    }
    if (today > selectedDates[0]) {
      window.alert('Please choose a date in the future');
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
