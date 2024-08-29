import "./styles.css";
import { Task } from "./Tasks";

const form = document.querySelector("form");
const newTask = document.querySelector("#newTask");
const formCancel = document.querySelector(".cancel");

function openForm() {
    document.getElementById("formContainer").classList.remove("notdisplayed");
    document.getElementById("formContainer").classList.add("displayed");
  }
  
function closeForm() {
    document.getElementById("formContainer").classList.add("notdisplayed");
    document.getElementById("formContainer").classList.remove("displayed");
  }

newTask.addEventListener("click",()=>{
    openForm()
})

formCancel.addEventListener("click",()=>{
    closeForm()
})

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const data = new FormData(form);
  const taskName = data.get("name");
  const taskImportance = data.get("importance");
  const taskDate = data.get("date");
  const task = new Task(taskName, taskImportance, taskDate);
  form.reset();
  closeForm();

});