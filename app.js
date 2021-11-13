// Desire Event Date & Time:
const eventDateTime = "31 December, 2021 00:00:00";

// Create CountDown Function:
let countDown = () => {
  const newYearTime = new Date(eventDateTime).getTime();
  const currentTime = new Date().getTime();
  const totalDiffTime = (newYearTime - currentTime) / 1000;

  // Calculation to find desire days, hours, minutes, seconds:
  let day = Math.floor(totalDiffTime / 3600 / 24);
  let hour = Math.floor((totalDiffTime / 3600) % 24);
  let minute = Math.floor((totalDiffTime / 60) % 60);
  let second = Math.floor(totalDiffTime % 60);

  document.querySelector("#days").textContent = day;
  document.querySelector("#hours").textContent = hour;
  document.querySelector("#minutes").textContent = minute;
  document.querySelector("#seconds").textContent = second;
};

// Invoked the setInterval Method:
setInterval(countDown, 1000);
