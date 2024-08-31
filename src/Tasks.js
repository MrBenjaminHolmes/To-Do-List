import { Project } from "./Projects";

export class Task {
  static tasks = [];
  constructor(name, note, importance, date, project) {
    this.name = name;
    this.note = note;
    this.importance = importance;
    this.dueDate = date;
    this.project = project;

    // Find the project and push the task to the project's task list
    const selectedProject = Project.projectsList.find(proj => proj.name === this.project);
    if (selectedProject) {
      selectedProject.tasks.push(this);
    }

    Task.tasks.push(this);
    console.log(Task.tasks);
    console.log(Project.projectsList); // To check if the task is added to the project
  }
}


export function createForm(){
    const formContainer = document.getElementById("formContainer")
    const form = `
    <form method="dialog" id="newTask">
                <h2 class="caption">Enter Task</h2>
                <label for="name"><b>Name</b></label>
                <input type="text" id="name" placeholder="Enter Task Name" name="name" required>
                
                <label for="importance"><b>Importance</b></label>
                <select id="importance" name="importance">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>

                <label for="project"><b>Project</b></label>
                <select id="project" name="project">
                  </select>
                
                <label for="notes"><b>Notes</b></label>
                <textarea id="notes" name="notes" rows="4" cols="50"> </textarea>
                
                <label for="date"><b>Due Date</b></label>
                <input type="date" id="date" placeholder="Enter Due Date" name="date" required>  

                <button id="submitBtn" type="submit" class="btn submit"">Submit</button>
                <button type="button" class="btn cancel"">Close</button>
            </form>
                `

    formContainer.innerHTML = form;

    Project.projectsList.forEach(element => {
      const optionElement = document.createElement("option");
      const selectBox = document.querySelector("#project")
      selectBox.appendChild(optionElement);
      optionElement.value = (`${element.name}`)
      optionElement.innerHTML = (`${element.name}`)

  });

  }
