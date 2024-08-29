import "./styles.css";

const form = document.querySelector("form");
const newTask = document.querySelector("#newTask");
console.log(newTask)

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(form);
  const taskData = {};
  for (const [name, value] of data.entries()) {
    taskData[name] = value;
  }
}
)

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
