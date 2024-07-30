// Get references to the DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Create and append edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edit your task:', listItem.textContent.replace('EditDelete', '').trim());
            if (newTaskText) {
                listItem.textContent = newTaskText;
                listItem.appendChild(editButton);
                listItem.appendChild(deleteButton);
                listItem.appendChild(completeButton); // Re-add the complete button
            }
        });
        
        // Create and append delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        // Create and append complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });
        
        listItem.appendChild(completeButton);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

// Add event listener to the button
addTaskButton.addEventListener('click', addTask);

// Optional: Add functionality to press Enter to add tasks
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
