import "./styles.css";
import { Task } from "./Tasks";
import { Project,createProjectForm} from "./Projects";
import { updateTaskUI } from "./UI";
import { createForm} from "./Tasks";

// Get references to the form containers and buttons
const newTaskBtn = document.querySelector("#newTask");
const newProjectBtn = document.querySelector("#newProject");
const formContainer = document.getElementById("formContainer");


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

newTaskBtn.addEventListener("click", () => {
    openForm(formContainer, createForm);
});

newProjectBtn.addEventListener("click", () => {
    openForm(formContainer, createProjectForm);
});

function attachFormListeners(formContainer) {
    const form = formContainer.querySelector("form"); // Select the form within the container
    const taskformCancel = form.querySelector(".cancel");

    taskformCancel.addEventListener("click", () => {
        closeForm(formContainer);
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        if (form.id === "newTask") {
            const taskName = data.get("name");
            const taskNote = data.get("notes");
            const taskImportance = data.get("importance");
            const taskDate = data.get("date");
            const task = new Task(taskName, taskNote, taskImportance, taskDate);
            updateTaskUI();
        } else if (form.id === "newProject") {
            const projectName = data.get("name");
            const projectTasks = [];
            const project = new Project(projectName, projectTasks);
        }
        form.reset();
        closeForm(formContainer);
    });
}
