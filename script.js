const inputField = document.querySelector('#inp');
const addButton = document.querySelector('#btn');
const countvalue = document.querySelector('.count');
const error = document.querySelector('#error');
const taskContainer = document.querySelector('.added-lists');


inputField.addEventListener('input', function () {

    if (this.value !== '') {

        this.style.color = '#000';
        this.style.fontWeight = '400';

    }
    else {
        this.style.color = '#a4a1a1';
        this.style.fontSize = '16px';
    }
});


let taskCount = 0;

const displayCount = (taskCount) => {

    countvalue.innerText = taskCount;

};

const addTask = () => {

    const taskName = inputField.value.trim();

    if (!taskName) {
        showError('List cannot be Empty');
        return;
    }

    const task = `
    
        <div class="list">
            <input type="checkbox" id="chk">
            <p> ${taskName}</p>
            <button id="deleteBtn"> <i class='bx bxs-trash'></i></button>
        </div>
    
    `

    taskContainer.insertAdjacentHTML('beforeend', task);


    const deleteButton = document.querySelectorAll('#deleteBtn');

    deleteButton.forEach((deleteBtn) => {

        deleteBtn.onclick = () => {

            deleteBtn.parentNode.remove();

            taskCount -= 1;
            displayCount(taskCount);
        };

    });

    const taskCheck = document.querySelectorAll('.list');

    taskCheck.forEach((checkBox) => {
        checkBox.onchange = () => {

            checkBox.nextElementSibling.classList.toggle("completed");
            if (checkBox.checked) {
                taskCount--;
            }
            else {
                taskCount++;
            }
            displayCount(taskCount);
        };
    });
    taskCount += 1;
    displayCount(taskCount);
    inputField.value = '';

};

const showError = (message) => {
    error.textContent = message;
    error.style.display = 'block';
    setTimeout(() => {
        error.style.display = 'none';
    }, 1000);
};

addButton.addEventListener('click', addTask);

window.onload = () => {
    taskCount = 0;
    displayCount(taskCount);
    inputField.value = '';

};