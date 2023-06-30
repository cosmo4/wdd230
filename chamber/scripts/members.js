let newDate = new Date()
document.getElementById("copyright-year").innerText = newDate.getFullYear();

const modifyDate = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = "Last Modified: " + modifyDate;

window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    // Ensure that cardview is default by clicking the button
    // after one second of loading
    const button = document.getElementById('cardView');
    button.click();
  }, 500);
  
});

function toggleNav() {
    let nav = document.querySelector('nav');
    nav.classList.toggle('open');

    let menu = document.getElementById('menu');
    menu.classList.toggle('open');
}


const membersJSON = 'https://cosmo4.github.io/wdd230/chamber/data/member.json';

function toggleDirectoryList() {
  // add class to section memberInfo for easy styling
  const memInfo = document.getElementById('memberInfo');
  memInfo.classList.toggle('listViewMemberInfo');

  // add class to members for easy styling
  const comp = document.querySelector('.members');
  comp.classList.toggle('listViewMember');

  // add class to button for easy styling 
  const button = document.getElementById('listView');
  button.classList.toggle('selectedBtn');

  // remove class from cardView button to unselect it
  const cardViewButton = document.getElementById('cardView');
  cardViewButton.classList.remove('selectedBtn');

  // remove class from section memberInfo to clear previous view
  memInfo.classList.remove('cardViewMemberInfo');

  // remove class from members to clear previous view
  comp.classList.remove('cardViewMember');
}

function toggleDirectoryCard() {
  // add class to section memberInfo for easy styling
  const memInfo = document.getElementById('memberInfo');
  memInfo.classList.toggle('cardViewMemberInfo');

  // add class to members for easy styling
  const comp = document.querySelector('.members');
  comp.classList.toggle('cardViewMember');

  // add class to button for easy styling 
  const button = document.getElementById('cardView');
  button.classList.toggle('selectedBtn');

  // remove class from listView button to unselect it
  const listViewButton = document.getElementById('listView');
  listViewButton.classList.remove('selectedBtn');

  // remove class from section memberInfo to clear previous view
  memInfo.classList.remove('listViewMemberInfo');

  // remove class from members to clear previous view
  comp.classList.remove('listViewMember');
}


function displayResults(data) {
    const membersList = document.getElementById('memberInfo');
    data.forEach((member) => {
        // put each member into a section with id of company name and
        // class name of members
        const company = document.createElement('section');
        company.id = member.companyName.replace(/\s/g, '-').toLowerCase();
        company.classList.add('members');

        // create element for image
        const compImg = document.createElement('img');
        compImg.src = member.image;
        compImg.alt = member.companyName;
        company.appendChild(compImg);

        // create element for companyName
        const companyName = document.createElement('p');
        companyName.textContent = member.companyName;
        companyName.classList.add('compName');
        company.appendChild(companyName);

        //create element for address
        const address = document.createElement('p');
        address.textContent = member.address;
        company.appendChild(address);

        // create element for phoneNumber
        const phone = document.createElement('p');
        phone.textContent = member.phoneNumber;
        company.appendChild(phone);

        // create element for url
        const url = document.createElement('a');
        url.textContent = member.url;
        url.href = member.url;
        url.setAttribute('target', '_blank');
        company.appendChild(url);

        // create element for membershipLevel
        const memLevel = document.createElement('p');
        memLevel.textContent = "Membership Level: " + member.membershipLevel;
        company.appendChild(memLevel);

        // create element for owner names
        const ownerNames = document.createElement('p');
        ownerNames.textContent = "Owner(s): " + member.ownerNames;
        company.appendChild(ownerNames);

        // append section to membersList on html doc
        membersList.appendChild(company);
    


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

jsonFetch();