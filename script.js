const addbutton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

window.addEventListener('load', function() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(function(task) {
        addTask(task);
    });
});

addbutton.addEventListener('click', function(){
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please Enter a Task');
        return;
    }
    addTask(taskText);
    taskInput.value = '';
});

function addTask(text) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = text;

    const deletebutton = document.createElement('button');
    deletebutton.textContent = 'X';
    deletebutton.className = 'delete-button';

    deletebutton.addEventListener('click' , function() {
        li.remove();
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(deletebutton);
    taskList.appendChild(li);

    saveTasks();

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task-item span').forEach(function(span) {
            tasks.push(span.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}