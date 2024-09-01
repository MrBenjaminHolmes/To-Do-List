import { Task } from "./Tasks";
import { Project } from "./Projects";
const mainContainer = document.getElementById("mainBoard");
const projectsContainer = document.getElementById("list");

export function updateUI() {
  projectsContainer.innerHTML = "";
  Project.projectsList.forEach((element) => {
    const projectCard = `<p class="project">${element.name}</p>`;
    projectsContainer.innerHTML += projectCard;
  });
  const projectListBtn = document.querySelectorAll("p.project");
  projectListBtn.forEach((element) => {
    element.addEventListener("click", () => {
      addTasks(element.textContent);
    });
  });
}
export function addTasks(projectName) {
  const project = Project.projectsList.find(
    (element) => element.name === projectName
  );
  if (project) {
    mainContainer.innerHTML = `<h2 class="boardHeading" >${project.name}</h2>`;
    project.tasks.forEach((task, index) => {
      const card = `
                <div class="card">
                    <div class="info">
                        <h2>${task.name}</h2>
                        <h3>${task.importance}</h3>
                        <p>Note: ${task.note}</p>
                        <p class="due" >Due: ${task.dueDate}</p>
                    </div>
                    <button class="remove" data-index="${index}"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                </div>`;
      mainContainer.innerHTML += card;
    });
    const removeBtns = document.querySelectorAll(".remove");
    removeBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = parseInt(e.target.getAttribute("data-index"), 10);
        if (!isNaN(index)) {
          const taskToRemove = project.tasks[index];
          Task.removeTask(taskToRemove);
          addTasks(projectName);
          updateUI();
        }
      });
    });
  }
}
