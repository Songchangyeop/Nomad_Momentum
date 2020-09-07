const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
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
  delBtn.addEventListener('click', deleteToDo);
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

function setId() {
  for (let i = 0; i < toDos.length; i++) {
    toDos[i].id = i + 1;
  }
}
// submit Input
function handleSubmit(event) {
  setId();
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
