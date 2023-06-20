let newDate = new Date()
document.getElementById("copyright-year").innerText = newDate.getFullYear();

const modifyDate = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = "Last Modified: " + modifyDate;

var visitCount = localStorage.getItem("page_view");

if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}

document.getElementById("counterContainer").innerHTML = visitCount;

function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('open');

    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

const modeButton = document.querySelector("#mode");
const main = document.querySelector("html");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-caption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=43.69&lon=-116.49&units=imperial&appid=2c352eee7ef0a34c1b7e420592f48122"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
        throw new Error('Error: Unable to fetch weather data');
      }
    } catch (error) {
      console.log(error);
    }
  }
  


function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const weatherEvents = data.weather.map(event => {
	const description = event.description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	return description;
  }).join('');
  
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', 'Weather Events');
  captionDesc.textContent = weatherEvents;
  console.log(weatherEvents);
}

apiFetch();

