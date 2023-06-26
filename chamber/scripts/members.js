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


const membersJSON = 'https://cosmo4.github.io/wdd230/chamber/data/members.json';

function toggleDirectory() {

}

function displayResults(data) {
    const membersList = document.getElementById('membersInfo');
    data.forEach((member) => {
        // put each member into a section with id of company name and
        // class name of members
        const company = document.createElement('section');
        company.id = member.companyName.replace(/\s/g, '-').toLowerCase();
        company.classList.add('members');

        // create element for companyName

        //create element for address

        // create element for phoneNumber

        //create elemeent for url

        // create element for image

        // create element for membershipLevel

        // create element for owner names


    })

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