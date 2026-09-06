const addTask = document.querySelector("#add-task");
const taskInput = document.querySelector("#input");
const toDoList = document.querySelector(".todo-list");
const totalTask = document.querySelector(".total-tasks");
const completedTask = document.querySelector(".completed-tasks");
const pendingTask = document.querySelector(".active-tasks");

const clearCompleted = document.querySelector("#clear-completed");

const buttonFilter = document.querySelectorAll(".filter button");


let taskLocal = JSON.parse(localStorage.getItem("tasks")) || [];

let filter = "All";


function updateTaskStatus(taskId){
    let task = taskLocal.find(task => task.taskId === taskId);
    task.completed = !task.completed;
    localStorage.setItem("tasks", JSON.stringify(taskLocal));
    renderByFilter();
};

function editTask(taskId){
    let taskContent = taskLocal.find(task => task.taskId === taskId);
    let newName = prompt("Edit task:");
    while(newName.trim() === ""){
        alert("The input field must not be left blank");
        newName = prompt("Edit task:");
    };
    if(newName === null){
        alert('Edit unsuccessful');
        return;
    }else{
        taskContent.taskName = newName.trim();
        localStorage.setItem("tasks", JSON.stringify(taskLocal));
        renderByFilter();
        alert('Edit successful');
    }
};


function deleteTask(taskId){
    taskLocal = taskLocal.filter(task => task.taskId !== taskId);
    localStorage.setItem("tasks", JSON.stringify(taskLocal));
    renderByFilter();
};


function loadTasks(list=taskLocal){
    let contentToDo = "";
    if(list.length > 0){
        contentToDo = list.map(task =>{
            return `
            <label class ="todo-item ${task.completed ? "completed" : ""}">
                <input type="checkbox" ${task.completed ? "checked" : ""} onclick="updateTaskStatus(${task.taskId})">
                <p>${task.taskName}</p>
                <button class = "edit-task" onclick="editTask(${task.taskId})">
                    <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" width="20px" height="20px" alt="Edit Task Icon">
                </button>
                <button class = "delete-task" onclick="deleteTask(${task.taskId})">
                    <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" width="20px" height="20px" alt="Edit Task Icon">
                </button>
            </label>
        `
        }).join(" ");
    }else{
        contentToDo = "<p>No tasks available</p>";
    }
    toDoList.innerHTML = contentToDo;
    totalTask.textContent = " " + taskLocal.length;
    completedTask.textContent = " " + taskLocal.filter(task => task.completed).length;
    pendingTask.textContent = " " + taskLocal.filter(task => !task.completed).length;
};
loadTasks();

function saveTask(){
    let taskValue = taskInput.value.trim();
    let check = taskLocal.some(task => task.taskName.toUpperCase() === taskValue.toUpperCase());
    if (check){
        alert('The task already exists.');
        return;
    }
    if(taskValue){
        taskLocal.push({
            taskId: Date.now(),
            taskName: taskValue,
            completed: false
        });
        localStorage.setItem("tasks", JSON.stringify(taskLocal));
        renderByFilter();
        taskInput.value = "";
    }else{
        alert("Please enter a task");
    }
};

function renderByFilter(){
    if(filter==="Active"){
        let taskActive = taskLocal.filter(task => task.completed === false);
        if (taskActive.length === 0){
            toDoList.innerHTML = "<p>No active tasks available</p>";
            totalTask.textContent = " " + taskLocal.length;
            completedTask.textContent = " " + taskLocal.filter(task => task.completed).length;
            pendingTask.textContent = " " + taskLocal.filter(task => !task.completed).length;
            return;
        }
        loadTasks(taskActive);
    }else if (filter==="Completed"){
        let taskCompleted = taskLocal.filter(task => task.completed === true);
        if (taskCompleted.length === 0){
            toDoList.innerHTML = "<p>No Completed tasks available</p>";
            totalTask.textContent = " " + taskLocal.length;
            completedTask.textContent = " " + taskLocal.filter(task => task.completed).length;
            pendingTask.textContent = " " + taskLocal.filter(task => !task.completed).length;
            return;
        }
        loadTasks(taskCompleted);
    }else{
        loadTasks();
    }
};

addTask.addEventListener("click", saveTask);

taskInput.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        saveTask();
    }
});


buttonFilter.forEach(button =>{
    button.addEventListener("click", function(){
        buttonFilter.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        filter = this.dataset.button;
        renderByFilter();
    });
});


clearCompleted.addEventListener('click',function (){
    if(!taskLocal.some(task => task.completed)){
        alert("No tasks have been completed.");
    }else{
        let ok = confirm('Are you sure you want to delete the completed tasks?');
        if(!ok){
            alert("Deletion failed");
            return;
        }
        taskLocal = taskLocal.filter(task => !task.completed);
        localStorage.setItem("tasks", JSON.stringify(taskLocal));
        renderByFilter();
        alert("Successfully deleted");
    }
});
