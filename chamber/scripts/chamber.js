let newDate = new Date()
document.getElementById("copyright-year").innerText = newDate.getFullYear();

const modifyDate = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = "Last Modified: " + modifyDate;

const membersJSON = 'https://cosmo4.github.io/wdd230/chamber/data/members.json';

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

  var message = '';
  if (daysDifference < 1) {
    message = 'Back so soon! Awesome!';
  } else {
    message = 'You last visited ' + daysDifference + ' ';
    message += (daysDifference === 1) ? 'day ago.' : 'days ago.';
  }

  document.getElementById('timing').innerText = message;
  localStorage.setItem('lastVisitDate', currentDate.toISOString());
}
document.querySelector('input[type="hidden"]').value = new Date().toISOString();

function toggleDirectory() {

}

function displayResults(data) {

}

async function jsonFetch() {
  
  try {
    const jsonFile = await fetch(membersJSON);
    if (jsonFile.ok) {
      const data = await jsonFile.json();
      displayResults(data);
      console.log(data);
    } else {
      throw new Error('Error: Unable to fetch JSON file');
    }
  } catch (error) {
    console.log(error);
  }
}