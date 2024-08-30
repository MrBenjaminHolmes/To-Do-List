export class Task {
  static tasks = [];
    constructor(name,note,importance,date) {
      this.name = name;
      this.note = note;
      this.importance = importance;
      this.dueDate = date;
      Task.tasks.push(this);
      console.log(Task.tasks)
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
                
                <label for="notes"><b>Notes</b></label>
                <textarea id="notes" name="notes" rows="4" cols="50"> </textarea>
                
                <label for="date"><b>Due Date</b></label>
                <input type="date" id="date" placeholder="Enter Due Date" name="date" required>  

                <button id="submitBtn" type="submit" class="btn submit"">Submit</button>
                <button type="button" class="btn cancel"">Close</button>
            </form>
                `

    formContainer.innerHTML = form;

  }
