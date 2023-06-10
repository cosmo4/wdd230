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
