const adddTask = document.querySelector("#add-task");
const taskInput = document.querySelector("#task-input");
const toDoList = document.querySelector("#todo-list");
const taskLocal = JSON.parse(localStorage.getItem("tasks")) || [];
let id = 1;



function loadTasks(list=taskLocal){
    let contentToDo = "";
    if(taskLocal.length > 0){
        contentToDo = list.map(task =>{
            return `
            <label class ="todo-item">
                <input type="checkbox">
                <p>${task.taskName}</p>
                <button class = "edit-task">
                    <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" width="20px" height="20px" alt="Edit Task Icon">
                </button>
                <button class = "delete-task">
                    <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" width="20px" height="20px" alt="Edit Task Icon">
                </button>
            </label>
        `.join(" ");
        });
    }else{
        contentToDo = "<p>No tasks available</p>";
    }
    toDoList.innerHTML = contentToDo;
}
loadTasks();

adddTask.addEventListener("click",function(){
    let taskValue = taskInput.value;
    if(taskValue){
        if(taskLocal.length === 0){
            taskLocal.push({
                taskId: id,
                taskName: taskValue
            });
            
        }else{
            taskLocal.push({
                taskId: id++,
                taskName: taskValue
            });
        }
        localStorage.setItem("tasks", JSON.stringify(taskLocal));
    }else{
        alert("Please enter a task");
    }
});


