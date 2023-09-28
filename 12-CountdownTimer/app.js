const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");
const timeItem = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// Getting the Year
const year = futureDate.getFullYear();
// Getting the Hours
const hours = futureDate.getHours();
// Getting the Minutes
const minutes = futureDate.getMinutes();
// Getting Month
let month = futureDate.getMonth();
month = months[month];
// Getting the Date
const date = futureDate.getDate();
// Getting the week days
const weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `Giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}: ${minutes}`;

// Future Time in Milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  t = futureTime - today;

  // Values in Milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Calculating All Values
  // Days
  let days = t / oneDay;
  days = Math.floor(days);
  // Hours
  let hours = Math.floor((t % oneDay) / oneHour);
  // Minutes
  let minutes = Math.floor((t % oneHour) / oneMinute);
  // Seconds
  let seconds = Math.floor((t % oneMinute) / 1000);

  // Setting values
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  timeItem.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired"> Sorry This Giveaway Has Expired </h4>`;
  }
}

// CountDown
let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime();
