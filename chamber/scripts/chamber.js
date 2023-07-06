let newDate = new Date()
document.getElementById("copyright-year").innerText = newDate.getFullYear();

const modifyDate = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = "Last Modified: " + modifyDate;



function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('open');

    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

var lastVisitDate = localStorage.getItem('lastVisitDate');
if (!lastVisitDate) {
  document.getElementById('timing').innerText = 'Welcome! Let us know if you have any questions.';
  localStorage.setItem('lastVisitDate', new Date().toISOString());
} else {
  var currentDate = new Date();
  var previousVisitDate = new Date(lastVisitDate);
  var timeDifference = currentDate.getTime() - previousVisitDate.getTime();
  var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let message = ' ';
  if (daysDifference < 1) {
    message = 'Back so soon! Awesome!';
  } else {
    message = 'You last visited ' + daysDifference + ' ';
    message += (daysDifference === 1) ? 'day ago.' : 'days ago.';
  }

  let time = document.getElementById('timing');
  if (time){
    time.innerText = message;
  }
  
  
  localStorage.setItem('lastVisitDate', currentDate.toISOString());
}
let dateValue =document.querySelector('input[type="hidden"]');
if (dateValue) {
  dateValue.value = new Date().toISOString();
} 


const membersJSON = 'https://cosmo4.github.io/wdd230/chamber/data/members.json';

async function jsonFetch() {
  
  try {
    const jsonFile = await fetch(membersJSON);
    if (jsonFile.ok) {
      const data = await jsonFile.json();
      
    } else {
      throw new Error('Error: Unable to fetch JSON file');
    }
  } catch (error) {
    console.log(error);
  }
}

const url = "https://api.openweathermap.org/data/2.5/weather?lat=43.69&lon=-116.49&units=imperial&appid=2c352eee7ef0a34c1b7e420592f48122"

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-caption');

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
currentTemp.innerHTML = `Temperature: ${data.main.temp.toFixed(0)}&deg;F`;
const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
const weatherEvents = data.weather.map(event => {
const description = event.description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
return description;
}).join('');

weatherIcon.setAttribute('src', iconsrc);
weatherIcon.setAttribute('alt', 'Weather Events');
captionDesc.textContent = `Skies: ${weatherEvents}`;
console.log(weatherEvents);
}

// apiFetch();


const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=43.69&lon=-116.49&units=imperial&appid=2c352eee7ef0a34c1b7e420592f48122"

async function apiFetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayResults2(data);
    } else {
      throw new Error('Error: Unable to fetch weather data');
    }
  } catch (error) {
    console.log(error);
  }
}
function displayResults2(data) {
  const filteredList = data.list.filter(item => {
    const dt = new Date(item.dt * 1000);
    return dt.getHours() === 12;
  });

  filteredList.forEach(item => {
    const date = new Date(item.dt * 1000);
    const dayofWeek = date.toLocaleDateString(undefined, {weekday: 'short'})
    const temperature = item.main.temp.toFixed(0);
    const description = item.weather[0].description;

    console.log(`Date: ${dayofWeek}, Temperature: ${temperature}°F, Description: ${description}`);
  });
}

// apiFetchForecast();