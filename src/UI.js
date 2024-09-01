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
    mainContainer.innerHTML = "";
    project.tasks.forEach((task, index) => {
      const card = `
                <div class="card">
                    <div class="info">
                        <h2>${task.name}</h2>
                        <h3>${task.importance}</h3>
                        <p>Note: ${task.note}</p>
                        <p>Due: ${task.dueDate}</p>
                    </div>
                    <button class="remove" data-index="${index}">Remove</button>
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
