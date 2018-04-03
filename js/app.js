function createTodoItem(title) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  const label = document.createElement('label');
  label.innerText = title;
  label.className = 'title';

  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.className = 'textfield';

  const  editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.className = 'edit';
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.className = 'delete';

  const li = document.createElement('li');
  listItem.className = 'todo-item';

  listItem.appendChild(checkbox);
  listItem.appendChild(lable);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  bindEvents(listItem);

  return listItem;

}
 function bindEvents(todoItem){
   const checkbox = todoItem.querySelector('.checkbox');
   const editButton = todoItem.querySelector('button.edit');
   const deleteButton = todoItem.querySelector('button.delete');

   checkbox.addEventListener('change', toggleTodoItem);
   editButton.addEventListener('click', editTodoItem);
   deleteButton.addEventListener('click', deleteTodoItem);

 }
function addTodoItem(event) {
  event.preventDefault();

  if(addInput.value === '')
  return alert('You need to write task!');

  const todoItem = createTodoItem(addInput.value);
  todoList.appendChild(todoItem)
  addInput.value = '';
}
function toggleTodoItem(){
  const listItem = this.parentNode;
  listItem.classList.toggle('completed');


}
function editTodoItem() {
  const listItem = this.parentNode;
  const title = listItem.querySelector('.title');
  const editInput = listItem.querySelector('.textfield');
  const isEditing = listItem.classList.contains('editing');

  if (isEditing) {
    title.innerText = editInput.value;
    this.innerText = 'Edit';

  }else {
    editInput.value = title.innerText;
    this.innerText = 'Save'
  }
  listItem.classList.toggle('editing');
}
function deleteTodoItem() {

}

const todoForm = document.createElement('todo-form');
const addInput = document.createElement('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit', addTodoItem);
