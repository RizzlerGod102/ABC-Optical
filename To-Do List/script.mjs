console.log("Hello from JS!");

//Objective: take some task text as a parameter
// add a new list item to the page
// with a checkbox in it.
function createTask(taskText) {
  const taskList = document.getElementById("task-list");

  const taskListItem = document.createElement("li");
  taskList.appendChild(taskListItem);

  const taskListItemCheckbox = document.createElement("input");
  taskListItemCheckbox.type = "checkbox";
  taskListItem.appendChild(taskListItemCheckbox);

  const taskListItemText = document.createElement("span");
  taskListItem.appendChild(taskListItemText);
  taskListItemText.innerText = taskText;

  // Set up an event listener on each checkbox to update the text with a strikethrough
  // when it is checked
  function onListItemChanged(e) {
    console.log(e);
    if (e.target.checked) {
      console.log("The task was completed");
      taskListItemText.style.textDecoration = "line-through";
      taskListItemText.style.color = "grey";
    } else {
      console.log("The task was undone?!");
      taskListItemText.style.textDecoration = "unset";
      taskListItemText.style.color = "black";
    }
    console.log("Task " + taskText + " had the check changed!");
  }
  taskListItemCheckbox.addEventListener("change", onListItemChanged);
}

// Objective: Console log a message with the task text when the new button is pressed.
function onNewButtonPress() {
  const taskText = document.getElementById("task-text").value;
  console.log("New task: " + taskText);

  createTask(taskText);
}

const newButton = document.getElementById("new-button");
newButton.addEventListener("click", onNewButtonPress);
