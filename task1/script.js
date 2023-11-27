const user = document.getElementById("user");
let firstName = prompt("Please,enter your name!");
user.innerHTML = `Hello, ${firstName}! Welcome!`;

const displayHours = document.getElementById("displayHours");
const displayMinutes = document.getElementById("displayMinutes");
const displaySeconds = document.getElementById("displaySeconds");
const day = document.getElementById("day");

function showTime() {
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let currentDate = new Date();
    const currentHours = currentDate.getHours();
    displayHours.innerHTML = currentHours < 10 ? "0" + currentHours : currentHours;

    const currentMinutes  = currentDate.getMinutes();
    displayMinutes.innerHTML = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

    const currentSeconds = currentDate.getSeconds();
    displaySeconds.innerHTML = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;

    day.innerHTML = weekDay[currentDate.getDay()];      
}

showTime();

setInterval(showTime,1000);