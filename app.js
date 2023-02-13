const todoForm  = document.querySelector('#todoForm');
const inputTodo = document.querySelector('#todo');
const todoList = document.querySelector('#todoList');
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

for (let savedTodo of savedTodos) {
    let newTodo = document.createElement("li");
    const removeBtn = document.createElement('button');
    newTodo.innerText = savedTodo.task;
    removeBtn.innerText = 'remove';
    newTodo.isCompleted = savedTodo.isCompleted ? true : false;
    if (newTodo.isCompleted) {
      newTodo.style.textDecoration = "line-through";
    }
    newTodo.append(removeBtn);
    todoList.appendChild(newTodo);
  }


todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    newTodo.innerText = inputTodo.value;
    removeBtn.innerText = 'remove';
    newTodo.append(removeBtn);
    todoList.append(newTodo);

    savedTodos.push({ task: newTodo.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));

});

todoList.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    } else if(e.target.tagName === 'LI') {
        console.log(e);
        e.target.style.textDecoration = "line-through";
    }
    console.log(e.target.tagName);
});
