// script.js

// Selecting elements
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editTask(taskItem, taskContent));

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => toggleComplete(taskItem));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(taskItem));

    taskActions.appendChild(editBtn);
    taskActions.appendChild(completeBtn);
    taskActions.appendChild(deleteBtn);
    taskItem.appendChild(taskActions);

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

// Function to toggle task completion
function toggleComplete(taskItem) {
    taskItem.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}

// Function to edit a task
function editTask(taskItem, taskContent) {
    const newTaskText = prompt('Edit your task:', taskContent.textContent);
    if (newTaskText !== null) {
        taskContent.textContent = newTaskText.trim();
    }
}

// Event listener for adding tasks
addTaskBtn.addEventListener('click', addTask);

// Optional: Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
