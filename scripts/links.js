const baseURL = "https://cosmo4.github.io/wdd230/"

const linksURL = "https://cosmo4.github.io/wdd230/data/links.json"

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          displayLinks(data.weeks);
        } else {
          throw new Error('Error: Unable to fetch weather data');
        }
      } catch (error) {
        console.log(error);
      }
}

function displayLinks(weeks) {
    const activitiesList = document.querySelector('.activities');
  
    weeks.forEach((week) => {
      const weekSection = document.createElement('section');
      weekSection.id = week.week.replace(/\s/g, '-').toLowerCase();
      weekSection.classList.add('weeks');
  
      const weekTitle = document.createElement('p');
      weekTitle.textContent = week.week;
      weekSection.appendChild(weekTitle);
  
      week.links.forEach((link) => {
        const activityLink = document.createElement('a');
        activityLink.href = link.url;
        activityLink.textContent = link.title;
        activityLink.setAttribute('target', '_blank');
        weekSection.appendChild(activityLink);
  
        const linkSeparator = document.createTextNode(' | ');
        weekSection.appendChild(linkSeparator);
      });
  
      activitiesList.appendChild(weekSection);
    });
  }
  

getLinks();