const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");
const alertSuccess = document.querySelector(".alert-success");
const alertWarning = document.querySelector(".alert-warning");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
todoFilter.addEventListener("change", filterTodo);
document.addEventListener("DOMContentLoaded", getTodos);

function addTodo(e) {
    e.preventDefault();

    const isEmpty = str => !str.trim().length;

    if (isEmpty(todoInput.value)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 1500);
    } else {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const completedButton = document.createElement("button");
        completedButton.innerHTML = "<i class='fas fa-check-circle'></i>";
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = "<i class='fa fa-minus-circle'></i>";
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);

        saveLocalTodos(todoInput.value); 

        alertSuccess.style.display = "block";
        setTimeout(() => {
            alertSuccess.style.display = "none";
        }, 1500);

        todoInput.value = ""; 
    }
}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList.contains("trash-btn")) {
        const todo = item.parentElement;
        todo.classList.add("fall");
        removeLocalStorage(todo);
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
    }

    if (item.classList.contains("complete-btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(item => {
        if (item.nodeType === 1) { 
            switch (e.target.value) {
                case "all":
                    item.style.display = "flex";
                    break;
                case "completed":
                    item.style.display = item.classList.contains("completed") ? "flex" : "none";
                    break;
                case "uncompleted":
                    item.style.display = !item.classList.contains("completed") ? "flex" : "none";
                    break;
            }
        }
    });
}

function saveLocalTodos(todo) {
    let todos;
    try {
        todos = JSON.parse(localStorage.getItem("todos"));
        if (!Array.isArray(todos)) {
            todos = [];
        }
    } catch (error) {
        todos = []; 
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


function getTodos() {
    let todos;
    try {
        todos = JSON.parse(localStorage.getItem("todos"));
        if (!Array.isArray(todos)) {
            todos = [];
        }
    } catch (error) {
        todos = [];
    }

    todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const completedButton = document.createElement("button");
        completedButton.innerHTML = "<i class='fas fa-check-circle'></i>";
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = "<i class='fa fa-minus-circle'></i>";
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
    });
}


function removeLocalStorage(todo) {
    let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    const todoText = todo.children[1].innerText;
    todos = todos.filter(t => t !== todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}
