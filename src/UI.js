import { Task } from "./Tasks";
import { Project } from "./Projects";

 export function updateUI(){
    const mainContainer = document.getElementById("mainBoard");
    const projectsContainer = document.getElementById("list");
    projectsContainer.innerHTML = "";
    Project.projectsList.forEach(element=>{
        const projectCard = `<p class="project">${element.name}</p>`;
        projectsContainer.innerHTML += projectCard;
    });

    mainContainer.innerHTML = "";
    Task.tasks.forEach(element => {
        const card = `<div class="card">
                <div class="info">
                    <h2>${element.name}</h2>
                    <h3>${element.importance}</h3>
                    <p>Note: ${element.note}</p>
                    <p>Due: ${element.dueDate}</p>
                </div>
                <button class="remove">Remove</button>
            </div>`;
        mainContainer.innerHTML += card;
    });
    function addTasks( projectName) {
        // Find the project with the matching name
        const project = Project.projectsList.find(element => element.name === projectName);
    
        // Check if the project was found
        if (project) {
            // Loop through and print each task
            project.tasks.forEach(task => {
                console.log(task);
            });
        } else {
            console.log(`Project with name ${projectName} not found.`);
        }
    }
    const removeBtn = document.querySelectorAll(".card>button");
    removeBtn.forEach(element => {
        element.addEventListener("click",()=>{
            Task.tasks.pop(element)
            updateUI()
        })
    });
     
}