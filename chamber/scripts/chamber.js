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
