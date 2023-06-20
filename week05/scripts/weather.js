
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=2c352eee7ef0a34c1b7e420592f48122"

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
    const description = event.description.toLocaleUpperCase('en-US', { sentence: 'words' });
    return `<p>${description}</p>`;
  }).join('');
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', 'Weather Events');
  captionDesc.textContent = weatherEvents;
}

apiFetch();

