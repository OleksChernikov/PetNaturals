let timeLeft = 7200;

function startTimerAndData() {
  const timerElement = document.getElementById("timer");
  const dateElement = document.getElementById("data");
  const currentDate = getCurrentDate();
  dateElement.innerHTML = `Order date: ${currentDate}`;

  const interval = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(interval);
        timerElement.innerHTML = "TIME IS UP!";
        return;
    }
    timeLeft--;

    updateTimerDisplay(timerElement);
  }, 1000);
}

function updateTimerDisplay(timerElement) {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  
  timerElement.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}

function getCurrentDate() {
  const date = new Date();
  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

window.onload = startTimerAndData;

const phoneInput = document.getElementById('phoneNumber');

phoneInput.addEventListener('input', (event) => {
  const input = event.target.value;
  const newValue = input.replace(/\D/g, '');

  if (newValue.length < input.length) {
    const formattedInput = `+${newValue.substring(0, 3)} (${newValue.substring(3, 6)}) ${newValue.substring(6, 8)}-${newValue.substring(8, 10)}-${newValue.substring(10, 12)}`;
    event.target.value = formattedInput;
  } else {
    const formattedInput = `+${newValue.substring(0, 3)} (${newValue.substring(3, 6)}) ${newValue.substring(6, 8)}-${newValue.substring(8, 10)}-${newValue.substring(10, 12)}`;
    event.target.value = formattedInput;
  }
});
