const alarmFunction = () => {
  console.log("Alarm!");
  playSound();
  displayAlarmMessage("Alarm is ringing");
};

const playSound = () => {
  console.log("Playing sound: forestBird.wav");
  const audio = new Audio("forestBird.wav");
  audio.play()
    .then(() => {
      console.log('The audio file started playing successfully.');
    })
    .catch((error) => {
      console.error('Error playing audio:', error);
    });
};

const setAlarm = () => {
  const hourInput = document.getElementById("hour").value;
  const minuteInput = document.getElementById("minute").value;
  const secondInput = document.getElementById("second").value;

  const hour = parseInt(hourInput, 10);
  const minute = parseInt(minuteInput, 10);
  const second = parseInt(secondInput, 10);

  if (isNaN(hour) || isNaN(minute) || isNaN(second)) {
    console.log("Invalid time input. Please enter valid numbers for hour, minute, and second.");
    return;
  }

  const currentTime = new Date();
  const alarmTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    hour,
    minute,
    second
  );

  const timeDifference = alarmTime - currentTime;
  if (timeDifference <= 0) {
    console.log("Invalid alarm time. The specified time has already passed.");
    return;
  }

  setTimeout(alarmFunction, timeDifference);
  displayAlarmStatus("Alarm clock on");
};

const displayAlarmMessage = (message) => {
  const alarmMessageElement = document.getElementById("alarmMessage");
  alarmMessageElement.textContent = message;
};

const displayAlarmStatus = (status) => {
  const alarmStatusElement = document.getElementById("alarmStatus");
  alarmStatusElement.textContent = status;
};

const start = () => {
  const setAlarmButton = document.getElementById("setAlarmButton");
  setAlarmButton.addEventListener("click", setAlarm);
  displayAlarmStatus("Alarm clock off");
};


//This is for feedback Tab
document.getElementById('feedback-tab-button').addEventListener('click', function() {
  var formContainer = document.getElementById('feedback-form-container');
  if (formContainer.style.display === 'block') {
    formContainer.style.display = 'none';
  } else {
    formContainer.style.display = 'block';
  }
});

start();


//Ctrl + C to exit node
//node my_alarm.js  to start node
