//create empty list for to do text / status and due date
let todoTaskText = [];
let todoTaskStatus = [];
let todoTaskDueDate = [];

function addTask() {
  const newTask = document.getElementById("new-task-text");
  if (newTask.value) {
    todoTaskText.push(newTask.value);
    todoTaskStatus.push(false);
    newTask.value = "";
    updateTodoList();
  }
}

function addDueDate() {
  const dueDate = document.getElementById("due-date");
  if (dueDate.value) {
    todoTaskDueDate.push(dueDate.value);
    dueDate.value = "";
    updateTodoList();
  }
}

function updateTodoList() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  todoTaskText.forEach((task, index) => {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    todoList.appendChild(newTodoTaskElement);
  });
}

function createNewTodoItemElement(task, index) {
  const newTodoTaskTextElement = document.createElement("p");
  newTodoTaskTextElement.innerText = task;

  if (todoTaskStatus[index] == true) {
    newTodoTaskTextElement.classList.add("complete");
  }

  const newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newTodoTaskTextElement);

  const dueDate = document.createElement("p");
  dueDate.innerText = `Due date: ${todoTaskDueDate[index]}`;
  newTodoTaskElement.appendChild(dueDate);
  if (todoTaskStatus[index] == true) {
    dueDate.classList.add("complete");
  }

  const completeButtonElement = document.createElement("input");
  completeButtonElement.type = "button";
  completeButtonElement.value = "Completed";
  completeButtonElement.onclick = function () {
    toggleComplete(index);
  };
  newTodoTaskElement.appendChild(completeButtonElement);

  return newTodoTaskElement;
}

function toggleComplete(index) {
  todoTaskStatus[index] = !todoTaskStatus[index];
  updateTodoList();
}
