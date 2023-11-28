export function makeToDoCardContainer(){

    const toDoContainer = document.querySelector('.todo-container');

    //////////////
    const toDoCardContainer = document.createElement('div');
    toDoCardContainer.classList.add('todo-card-container');
    toDoContainer.appendChild(toDoCardContainer);

    /////////////
    const completedToDoCategory = document.createElement('div');
    const completedCategoryHeader = document.createElement('div');

    completedCategoryHeader.textContent = ('COMPLETED');

    completedToDoCategory.classList.add('completed');
    completedCategoryHeader.classList.add('category-header');

    completedToDoCategory.appendChild(completedCategoryHeader);
    toDoCardContainer.appendChild(completedToDoCategory);

    /////////////
    const notCompletedToDoCategory = document.createElement('div');
    const notCompletedCategoryHeader = document.createElement('div');

    notCompletedCategoryHeader.textContent = ('NOT COMPLETED');

    notCompletedToDoCategory.classList.add('not-completed');
    notCompletedCategoryHeader.classList.add('category-header');

    notCompletedToDoCategory.appendChild(notCompletedCategoryHeader);
    toDoCardContainer.appendChild(notCompletedToDoCategory);
}