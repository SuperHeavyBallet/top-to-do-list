export function makeUserInputElement(){

    

    const toDoContainer = document.querySelector('.todo-container');

    const userInput = document.createElement('div');
    userInput.classList.add('user-input');
    toDoContainer.appendChild(userInput);


    const toDoForm = createForm();
    userInput.appendChild(toDoForm);


    //Creates The Entire Form Section
    function createForm()
    {
        const form = document.createElement('form');
        //form.setAttribute('action', '#');
        //form.setAttribute('method', 'post');

        //Creates The text input elements
        form.appendChild(createLabelInputPair('To Do:', 'todo-name', 'todo-name', 'text', ''));
        const detailsInput = (createLabelInputPair('Details:', 'todo-details', 'todo-details', 'text', ''));
        detailsInput.classList.add('box-input');
        form.appendChild(detailsInput);
        form.appendChild(createLabelInputPair('Due Date:', 'todo-due-date', 'todo-due-date', 'date', ''));
        const notesInput = (createLabelInputPair('Notes:', 'todo-notes', 'todo-notes', 'text', ''));
        notesInput.classList.add('box-input');
        form.appendChild(notesInput);
        
        

     

        //Creates the Radio Input elements, the function takes parameters of:
        //Text Description, Number of Radio Options, Text Content, Id, Name, Type
        const priorityContainer = createRadioContainer('Priority:', 3, [

            ['High', 'todo-priority-high', 'todo-priority', 'radio', 'high'],
            ['Medium', 'todo-priority-medium', 'todo-priority', 'radio', 'medium'],
            ['Low', 'todo-priority-low', 'todo-priority', 'radio', 'low']
        ]);
        form.appendChild(priorityContainer);

        const completedContainer = createRadioContainer('Completed', 2, [

            ['Yes', 'todo-completed-yes', 'todo-completed', 'radio', 'yes'],
            ['No', 'todo-completed-no', 'todo-completed', 'radio', 'no']
        ]);
        form.appendChild(completedContainer);

        //Creates the final submit button for this form
        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'button');
        submitButton.setAttribute('value', 'Create New To Do');
        submitButton.textContent = "Submit New To Do";
        submitButton.setAttribute('id', 'submit-new-todo');
        form.appendChild(submitButton);


        return form;
    }


    function createLabelInputPair(labelText, inputId, inputName, inputType, inputValue)
    {
        const container = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute('for', inputId);
        label.textContent = (labelText);

        const input = document.createElement('input');
        input.setAttribute('type', inputType);
        input.setAttribute('id', inputId);
        input.setAttribute('name', inputName);
        input.setAttribute('value', inputValue);

        container.appendChild(label);
        container.appendChild(input);

        return container;
    }

    function createRadioContainer(textDescription, numberOfRadioOptions, radioOptions)
    {
        const container = document.createElement('div');

        const containerText = document.createElement('p');
        containerText.textContent = textDescription;
        container.appendChild(containerText);


        //Creates the required number of Radio options based on function arguments
        for (let i = 0; i < numberOfRadioOptions; i++)
        {
            container.appendChild(createLabelInputPair(radioOptions[i][0], radioOptions[i][1], radioOptions[i][2], radioOptions[i][3], radioOptions[i][4]));
        }

        return container;


    }



    
}