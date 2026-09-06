const adddTask = document.querySelector("#add-task");
const taskInput = document.querySelector("#input");
const toDoList = document.querySelector(".todo-list");
const taskLocal = JSON.parse(localStorage.getItem("tasks")) || [];


function uppdateTaskStatus(taskId){
    let task = taskLocal.find(task => task.taskId === taskId);
    task.completed = !task.completed;
    localStorage.setItem("tasks", JSON.stringify(taskLocal));
    loadTasks();
}


function loadTasks(list=taskLocal){
    let contentToDo = "";
    if(taskLocal.length > 0){
        contentToDo = list.map(task =>{
            return `
            <label class ="todo-item${task.completed ? "completed" : ""}">
                <input type="checkbox" ${task.completed ? "checked" : ""} onclick="uppdateTaskStatus(${task.taskId})">
                <p>${task.taskName}</p>
                <button class = "edit-task">
                    <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" width="20px" height="20px" alt="Edit Task Icon">
                </button>
                <button class = "delete-task">
                    <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" width="20px" height="20px" alt="Edit Task Icon">
                </button>
            </label>
        `
        }).join(" ");
    }else{
        contentToDo = "<p>No tasks available</p>";
    }
    toDoList.innerHTML = contentToDo;
}
loadTasks();

function saveTask(){
    let taskValue = taskInput.value;
    if(taskValue){
        taskLocal.push({
            taskId: taskLocal.length + 1,
            taskName: taskValue,
            compeleted: false
        });
        localStorage.setItem("tasks", JSON.stringify(taskLocal));
        loadTasks();
        taskInput.value = "";
    }else{
        alert("Please enter a task");
    }
}

adddTask.addEventListener("click", saveTask);

taskInput.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        saveTask();
    }
});


