let todoTaskText = [];
let todoTaskStatus = [];

function addTask() {
    const newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTaskText.push(newTask.value);
        todoTaskStatus.push(false);
        newTask.value = "";
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
    newTodoTaskTextElement.classList.add("updated-button")
  }

  const newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newTodoTaskTextElement);

  const completeButtonElement = document.createElement("input");
  completeButtonElement.type = "button";
  completeButtonElement.value = "Completed";
  completeButtonElement.onclick = function () {
    toggleComplete(index);
  };
  newTodoTaskElement.appendChild(completeButtonElement);


  return newTodoTaskElement;
}

// function addDueDate() {

// }

function toggleComplete(index) {
  // If the to do is not complete
  if (todoTaskStatus[index] == false) {
    // Set the todo to complete
    todoTaskStatus[index] = true;
  } else {
    // Else the todo is already complete so set it to incomplete
    todoTaskStatus[index] = false;
  }
  updateTodoList();
}

// updateTodoList();