const datumOutput = document.querySelector(".date");
const zeitOutput = document.querySelector(".time");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = new Date();

// ! FUNKTION DATUM
const aktuellesDatum = () => {
  let day = today.getDate();
  let month = today.getMonth();
  month++; // da Index gezählt wird muss 1 addiert werden.
  let year = today.getFullYear();
  let weekday = days[today.getDay()];

  //   Null vor der Zahl falls < 10. Damit Zahl immer zweistelling ist.
  let dayZero = day < 10 ? `0${day}` : `${day}`;
  let monthZero = month < 10 ? `0${month}` : `${month}`;

  datumOutput.innerHTML = `${weekday} <br> ${dayZero}-${monthZero}-${year}`;
};
aktuellesDatum();

// ! FUNKTION ZEIT
const aktuelleZeit = () => {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let hoursZero = hours < 10 ? `0${hours}` : `${hours}`;
  let minutesZero = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let secondsZero = seconds < 10 ? `0${seconds}` : `${seconds}`;

  zeitOutput.innerHTML = `${hoursZero}:${minutesZero}:${secondsZero}`;
  setTimeout("aktuelleZeit();", 1000);
};
aktuelleZeit();
