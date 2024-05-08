const doneButton = document.querySelectorAll('li button');
const form = document.querySelector('#add-to-do');
const input = document.querySelector('#to-do-item');
const toDoList = document.querySelector('#to-do-list');
var initialList = localStorage.getItem('localList');
console.log('Inital List : ', initialList);
console.log(localStorage);

if (initialList != null) {
  var localListArray = (initialList.split(', '));
  var itemCount = localListArray.length;
  console.log('Local List Array: ', localListArray);
  console.log('Item Count: ', itemCount);
  for (let i = 0; i <= (itemCount - 1); i++) {
    const newToDo = document.createElement('li');
    const crossOff = document.createElement('button');
    crossOff.innerText = ('Done');
    newToDo.innerText = localListArray[i] + ' ';
    newToDo.appendChild(crossOff);
    input.value = '';
    toDoList.appendChild(newToDo);
  }
}

toDoList.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.classList.add('completed');
  }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (initialList === null) {
    const newToDo = document.createElement('li');
    const crossOff = document.createElement('button');
    crossOff.innerText = ('Done');
    newToDo.innerText = input.value + ' ';
    newToDo.appendChild(crossOff);
    localStorage.setItem('localList', (input.value));
    initialList = localStorage.getItem('localList');
    console.log('Inital List : ', initialList);
    console.log(localStorage);
    input.value = '';
    toDoList.appendChild(newToDo);
  }

  else {
    const newToDo = document.createElement('li');
    const crossOff = document.createElement('button');
    crossOff.innerText = ('Done');
    newToDo.innerText = input.value + ' ';
    newToDo.appendChild(crossOff);
    var existingList = localStorage.getItem('localList');
    console.log('Existing List: ', existingList);
    localStorage.setItem('localList', existingList + ', ' + input.value);
    existingList = localStorage.getItem('localList');
    console.log('Existing List: ', existingList);
    console.log(localStorage);
    input.value = '';
    toDoList.appendChild(newToDo);
  }
});