export function makeUserInputElement(){

    const documentBody = document.querySelector('body');

    const userInput = document.createElement('div');
    userInput.classList.add('user-input');
    documentBody.appendChild(userInput);

    /////////////////////////////////////////////////////////
    const toDoForm = document.createElement('form');
    toDoForm.setAttribute('action', '#');
    toDoForm.setAttribute('method', 'post');
    userInput.appendChild(toDoForm);

    /////////////////////////////////////////////////////////
    const labelToDoName = document.createElement('label');
    labelToDoName.setAttribute('for', 'todo-name');
    labelToDoName.textContent = ('To Do:');

    const inputToDoName = document.createElement('input');
    Object.assign(inputToDoName,
        {
            'type': 'text',
            'id': 'todo-name',
            'name': 'todo-name'
        });
    
    toDoForm.appendChild(labelToDoName);
    toDoForm.appendChild(inputToDoName);

    /////////////////////////////////////////////////////////
    const labelToDoDescription = document.createElement('label');
    labelToDoDescription.setAttribute('for', 'todo-description');
    labelToDoDescription.textContent = ('Details:');

    const inputToDoDescription = document.createElement('input');
    Object.assign(inputToDoDescription,
        {
            'type': 'text',
            'id': 'todo-description',
            'name': 'todo-description'
        });

    toDoForm.appendChild(labelToDoDescription);
    toDoForm.appendChild(inputToDoDescription);
    
    /////////////////////////////////////////////////////////
    const labelToDoDueDate = document.createElement('label');
    labelToDoDueDate.setAttribute('for', 'todo-due-date');
    labelToDoDueDate.textContent = ('Due Date:');

    const inputToDoDueDate = document.createElement('input');
    Object.assign(inputToDoDueDate,
        {
            'type': 'date',
            'id': 'todo-due-date',
            'name': 'todo-due-date'
        });

    toDoForm.appendChild(labelToDoDueDate);
    toDoForm.appendChild(inputToDoDueDate);

    /////////////////////////////////////////////////////////
    const labelToDoNotes = document.createElement('label');
    labelToDoNotes.setAttribute('for', 'todo-notes');
    labelToDoNotes.textContent = ("Notes:");
    
    const inputToDoNotes = document.createElement('input');
    Object.assign(inputToDoNotes,
        {
            'type': 'text',
            'id': 'todo-notes',
            'name': 'todo-notes'
        });

    toDoForm.appendChild(labelToDoNotes);
    toDoForm.appendChild(inputToDoNotes);

    /////////////////////////////////////////////////////////

}