import { saveData } from ".";

export class Project {
  static projectsList = [];
  constructor(name) {
    this.name = name;
    this.tasks = [];
    Project.projectsList.push(this);
    saveData();
  }
}
export function createProjectForm() {
  const formContainer = document.getElementById("formContainer");
  const form = `
  <form method="dialog" id="newProject">
              <h2 class="caption">Enter Project</h2>
              <label for="name"><b>Name</b></label>
              <input type="text" id="name" placeholder="Enter Project Name" name="name" required>

              <button id="submitBtn" type="submit" class="btn submit"">Submit</button>
              <button type="button" class="btn cancel"">Close</button>
          </form>
              `;

  formContainer.innerHTML = form;
}
