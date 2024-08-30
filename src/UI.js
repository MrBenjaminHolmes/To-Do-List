import { Task } from "./Tasks";
import { Project } from "./Projects";

export function updateTaskUI(){
    
    const mainContainer = document.getElementById("mainBoard");
    const projectsContainer = document.getElementById("list");
    console.log(projectsContainer)
    projectsContainer.innerHTML = "";
    Project.projectsList.forEach(element=>{
        const projectCard = `<p>${element.name}</p>`
        projectsContainer.innerHTML += projectCard;
    });
    



    mainContainer.innerHTML = "";
    Task.tasks.forEach(element => {
        const card = `<div class="card">
                <div class="info">
                    <h2>${element.name}</h2>
                    <h3>${element.importance}</h3>
                    <p>${element.note}</p>
                    <p>Due: ${element.dueDate}</p>
                </div>
                <button class="remove"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
            </div>`
        mainContainer.innerHTML += card
    });
}