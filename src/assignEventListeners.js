import { makeToDoElement } from "./makeToDoElement";
import { makeNewToDoCard } from "./makeNewToDoCard";

export function assignEventListeners(){

    let toDoNameInputValue;
    let toDoDetailsInputValue;
    let toDoDueDateValue;
    let toDoNotesInputValue;
    let toDoPriorityInputValue;
    let toDoCompletedInputValue;

    clearInputFields();


    


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


    const submitButton = document.querySelector('#submit-new-todo');
    submitButton.addEventListener('click', () => {

        

        if (toDoNameInputValue != undefined && toDoCompletedInputValue != undefined)
        {
        makeNewToDoCard(
            toDoNameInputValue,
            toDoDetailsInputValue,
            toDoDueDateValue,
            toDoNotesInputValue,
            toDoPriorityInputValue,
            toDoCompletedInputValue
        );

        clearInputFields();


        }
        else{
            console.log("Empty");
        }

        
        

        

    });

    function clearInputFields()
    {
        //Reset Input Field Values
        const form = document.querySelector('form');
        form.reset();

        toDoNameInputValue = undefined;
        toDoDetailsInputValue = undefined;
        toDoDueDateValue = undefined;
        toDoNotesInputValue = undefined;
        toDoPriorityInputValue = undefined;
        toDoCompletedInputValue = undefined;

        /*console.log(
            toDoNameInputValue,
            toDoDetailsInputValue,
            toDoDueDateValue,
            toDoNotesInputValue,
            toDoPriorityInputValue,
            toDoCompletedInputValue
        );*/
    }

}
