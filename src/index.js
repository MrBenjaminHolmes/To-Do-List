import "./styles.css";
import { Task } from "./Tasks";
import { Project } from "./Projects";
import { updateTaskUI } from "./UI";
import { createForm } from "./Tasks";

const form = document.querySelector("form");
const newTask = document.querySelector("#newTask");
const taskForm = document.getElementById("formContainer");

function openForm(form) {
    form.classList.remove("notdisplayed");
    form.classList.add("displayed");
    createForm();
    attachFormListeners();
}

function closeForm(form) {
    form.classList.add("notdisplayed");
    form.classList.remove("displayed");
}

newTask.addEventListener("click", () => {
    openForm(taskForm);
});

function attachFormListeners() {
    const form = document.querySelector("form");
    const taskformCancel = document.querySelector(".cancel");

    taskformCancel.addEventListener("click", () => {
        closeForm(taskForm);
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();
      
        const data = new FormData(form);
        const taskName = data.get("name");
        const taskNote = data.get("note");
        const taskImportance = data.get("importance");
        const taskDate = data.get("date");
        const task = new Task(taskName, taskNote, taskImportance, taskDate);
        form.reset();
        closeForm(taskForm)
        updateTaskUI();
    });
}
