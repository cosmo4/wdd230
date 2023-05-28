const input = document.querySelector('#favchap');
const addBtn = document.querySelector('button');
const list = document.querySelector('#list');
console.log('Script link successful');

let chaptersArray = getChaptersList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

addBtn.addEventListener('click', () => {
    if (input.value === '') {
        console.log('Error, no information was input. Try again.')
        return;
    } else {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = ''; 
        input.focus();
    }
})

function displayList(item) {
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    li.innerHTML = item;
    delButton.textContent = '❌';
    delButton.classList.add('delete')
    li.append(delButton);
    list.append(li);

    delButton.addEventListener('click', () => {
        list.removeChild(li);
        delChapter(li.textContent);
        input.focus();
    
});
}

function setChapterList() {
    localStorage.setItem('favBOMlist', JSON.stringify(chaptersArray));
  }

function getChaptersList() {
    return JSON.parse(localStorage.getItem('favBOMlist'));
  }

function delChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
