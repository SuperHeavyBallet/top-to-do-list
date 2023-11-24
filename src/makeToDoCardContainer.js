export function makeToDoCardContainer(){

    const toDoContainer = document.querySelector('.todo-container');

    const toDoCardContainer = document.createElement('div');
    toDoCardContainer.classList.add('todo-card-container');
    toDoContainer.appendChild(toDoCardContainer);

    const completedToDoCategory = document.createElement('div');
    completedToDoCategory.textContent = ('COMPLETED');
    completedToDoCategory.classList.add('completed');
    toDoCardContainer.appendChild(completedToDoCategory);

    const notCompletedToDoCategory = document.createElement('div');
    notCompletedToDoCategory.textContent = ('NOT COMPLETED');
    notCompletedToDoCategory.classList.add('not-completed');
    toDoCardContainer.appendChild(notCompletedToDoCategory);
}