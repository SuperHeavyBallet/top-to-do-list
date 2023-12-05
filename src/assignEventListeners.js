import { makeToDoElement } from "./makeToDoElement";
import { makeProjectContainer } from "./makeProjectContainer";
import { makeProjectSelector } from "./makeProjectSelector";

export function assignEventListeners(){

    let newProjectInputValue;

    let toDoNameInputValue;
    let toDoDetailsInputValue;
    let toDoDueDateValue;
    let toDoNotesInputValue;
    let toDoPriorityInputValue;
    let toDoSelectedProjectInputValue
    let toDoCompletedInputValue;

    clearInputFields();

    //

    const newProjectInput = document.querySelector('#project-name');
    newProjectInput.addEventListener('input', function(event)
    {
        newProjectInputValue = event.target.value;
    });

    const submitProjectButton = document.querySelector('#submit-new-project');
    submitProjectButton.addEventListener('click', () => {

        

        if (newProjectInputValue != undefined)
        {
            const existingProjects = document.querySelectorAll(".project-container")

        for (let i = 0; i <existingProjects.length; i++)
        {
            const projectNameAsLowerString = newProjectInputValue.toLowerCase();
            const projectNameWithoutSpaces = projectNameAsLowerString.replaceAll(" ", "");


            if (document.getElementById(projectNameWithoutSpaces))
            {
                alert("Please Choose A Different Project Name");
                break;
            }

            else
            {

                const newToDoForm = document.querySelector('.new-todo-form');
                console.log("Clicked Submit New Project");
                makeProjectContainer(newProjectInputValue);
                makeProjectSelector();
                clearInputFields();
                break;
            }
        }
        }

        else{
            alert("Please fill out the \"Add New Project\" Field");
        }

        
        

        

    });


    

    //
    const toDoNameInput = document.querySelector('#todo-name');
    toDoNameInput.addEventListener('input', function(event) {

        toDoNameInputValue = event.target.value;
    });

    const toDoDetailsInput = document.querySelector('#todo-details');
    toDoDetailsInput.addEventListener('input', function(event) {

        toDoDetailsInputValue = event.target.value;
    });

    const toDoDueDateInput = document.querySelector('#todo-due-date');
    toDoDueDateInput.addEventListener('input', function(event){

        toDoDueDateValue = event.target.value;
    });

    const toDoNotesInput = document.querySelector("#todo-notes");
    toDoNotesInput.addEventListener('input', function(event) {

        toDoNotesInputValue = event.target.value;
    });

    const toDoPriorityInput = document.querySelectorAll('input[name="todo-priority"]');
    toDoPriorityInput.forEach(function (radioInput){
    radioInput.addEventListener('change', function(event){

        let selectedPriority = document.querySelector('input[name="todo-priority"]:checked');
        if (selectedPriority){

            toDoPriorityInputValue = selectedPriority.value;
        }
    });
    });

    const toDoCompletedInput = document.querySelectorAll('input[name="todo-completed"]');
    toDoCompletedInput.forEach(function (radioInput){
    radioInput.addEventListener('change', function(event){

        let selectedCompleted = document.querySelector('input[name="todo-completed"]:checked');
        if (selectedCompleted){

            toDoCompletedInputValue = selectedCompleted.value;
        }
    })
    });

    
    const toDoProjectAssignInput = document.querySelectorAll('select[name="project-select"]');
    toDoProjectAssignInput.forEach(function (selectInput){
        selectInput.addEventListener('change', function(event){

            let selectedProject = event.target.value;

            if (selectedProject)
            {
                toDoSelectedProjectInputValue = selectedProject;
                console.log(toDoSelectedProjectInputValue);
            }


        })
    })


    const submitToDoButton = document.querySelector('#submit-new-todo');
    submitToDoButton.addEventListener('click', () => {

        

        if (toDoNameInputValue != undefined && toDoCompletedInputValue != undefined)
        {
              
            makeToDoElement(
                toDoNameInputValue,
                toDoDetailsInputValue,
                toDoDueDateValue,
                toDoNotesInputValue,
                toDoPriorityInputValue,
                toDoCompletedInputValue,
                toDoSelectedProjectInputValue
            );

            clearInputFields();

        }
        else{
            alert("Please fill out the \"ToDo\" and \"Completed\" Fields");
        }

        
        

        

    });

    function clearInputFields()
    {
        //Reset Input Field Values
        const forms = document.querySelectorAll('form');

        for (let i = 0;  i < forms.length; i++)
        {
            forms[i].reset();
        }


        toDoNameInputValue = undefined;
        toDoDetailsInputValue = undefined;
        toDoDueDateValue = undefined;
        toDoNotesInputValue = undefined;
        toDoPriorityInputValue = undefined;
        toDoSelectedProjectInputValue = undefined;
        toDoCompletedInputValue = undefined;

    }

}
