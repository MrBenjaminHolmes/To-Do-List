import "./styles.css";
import { Task } from "./Tasks";
import { Project, createProjectForm } from "./Projects";
import { updateUI } from "./UI";
import { createForm } from "./Tasks";
import { addTasks, addAllTasks } from "./UI";

const newTaskBtn = document.querySelector("#newTask");
const newProjectBtn = document.querySelector("#newProject");
const formContainer = document.getElementById("formContainer");
const homeBtn = document.getElementById("homeBtn");

function loadData() {
  Task.tasks = JSON.parse(localStorage.getItem("Tasks"));
  Project.projectsList = JSON.parse(localStorage.getItem("Projects"));
  updateUI();
}

export function saveData() {
  localStorage.setItem("Tasks", JSON.stringify(Task.tasks));
  localStorage.setItem("Projects", JSON.stringify(Project.projectsList));
}

loadData();
addAllTasks();
updateUI();

function openForm(form, createFormFn) {
  form.classList.remove("notdisplayed");
  form.classList.add("displayed");
  createFormFn();
  attachFormListeners(form);
}

function closeForm(form) {
  form.classList.add("notdisplayed");
  form.classList.remove("displayed");
}

function attachFormListeners(formContainer) {
  const form = formContainer.querySelector("form");
  const taskformCancel = form.querySelector(".cancel");

  taskformCancel.addEventListener("click", () => {
    closeForm(formContainer);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    if (form.id === "newTask") {
      const taskName = data.get("name");
      const taskNote = data.get("notes");
      const taskImportance = data.get("importance");
      const taskDate = data.get("date");
      const taskProject = data.get("project");
      new Task(taskName, taskNote, taskImportance, taskDate, taskProject);
      addAllTasks();
    } else if (form.id === "newProject") {
      const projectName = data.get("name");
      new Project(projectName);
    }

    form.reset();
    closeForm(formContainer);
    updateUI();

    saveData();
  });
}

newTaskBtn.addEventListener("click", () => {
  openForm(formContainer, createForm);
});

newProjectBtn.addEventListener("click", () => {
  openForm(formContainer, createProjectForm);
});

homeBtn.addEventListener("click", () => {
  addAllTasks();
});
