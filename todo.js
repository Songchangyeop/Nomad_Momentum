const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

const toDos = [];

// save localStorage
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// Make tag and paint to Do list
function paintToDo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  delBtn.innerText = 'X';
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    // toDolist Object
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

// submit Input
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => paintToDo(toDo.text));
  }
}

// init
function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
