"use strict";

const tasks = [];

const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const greeting = document.getElementById("greeting");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskError = document.getElementById("task-error");
const taskList = document.getElementById("task-list");
const taskSummary = document.getElementById("task-summary");
const clearDone = document.getElementById("clear-done");

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  greeting.textContent = name ? `Hello, ${name}!` : "Please type your name";
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = taskInput.value.trim();
  if (!title) {
    taskError.textContent = "Task cannot be empty";
    return;
  }
  if (tasks.some((task) => task.title.toLowerCase() === title.toLowerCase())) {
    taskError.textContent = "Task already exists";
    return;
  }
  taskError.textContent = "";
  tasks.push({ title, done: false });
  taskInput.value = "";
  render();
});

clearDone.addEventListener("click", () => {
  for (let i = tasks.length - 1; i >= 0; i -= 1) {
    if (tasks[i].done) {
      tasks.splice(i, 1);
    }
  }
  render();
});

function render() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      tasks[index].done = checkbox.checked;
      render();
    });
    label.append(checkbox, ` ${task.title}`);
    if (task.done) {
      item.classList.add("done");
    }
    item.append(label);
    taskList.append(item);
  });

  if (tasks.length === 0) {
    taskSummary.textContent = "No tasks yet";
    return;
  }
  const remaining = tasks.filter((task) => !task.done).length;
  taskSummary.textContent = `${remaining} of ${tasks.length} tasks remaining`;
}
