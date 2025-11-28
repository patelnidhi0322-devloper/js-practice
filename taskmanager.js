// Task Manager App

let tasks = [];

// Add a task
function addTask(task) {
    tasks.push(task);
    console.log(`Task added: ${task}`);
}

// Remove a task
function removeTask(task) {
    const index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log(`Task removed: ${task}`);
    } else {
        console.log("Task not found");
    }
}

// Show all tasks
function showTasks() {
    console.log("Your Tasks:");
    tasks.forEach((t, i) => {
        console.log(`${i + 1}. ${t}`);
    });
}

// Testing
addTask("Learn JavaScript");
addTask("Complete MERN practice");
addTask("Push code to GitHub");
showTasks();

removeTask("Learn JavaScript");
showTasks();
