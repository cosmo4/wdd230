const input = document.querySelector('#favchap');
const addBtn = document.querySelector('button');
const list = document.querySelector('#list');
console.log('Script link successful');
addBtn.addEventListener('click', () => {
    if (input.value === '') {
        console.log('Error, no information was input. Try again.')
        return;
    } else {
    console.log('button clicked')
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    li.innerHTML = input.value;
    delButton.textContent = '❌';
    li.append(delButton);
    list.append(li);

    delButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    });
    input.focus();
    input.value = '';
}
});


