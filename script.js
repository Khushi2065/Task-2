const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("task-item");

  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = taskText;


  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.textContent = "X";

  removeBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
