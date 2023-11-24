export function makeToDoContainer(){

    const body = document.querySelector('body');

    const toDoContainer = document.createElement('div');
    toDoContainer.classList.add('todo-container');
    body.appendChild(toDoContainer);

}