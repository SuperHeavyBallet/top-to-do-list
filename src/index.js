import _ from 'lodash';
import { makeNavBar } from './makeNavBar';
import { ToDoElement } from './makeToDoElement';
import { makeUserInputElement } from './makeUserInputElement';


  console.log('Hello?');







  makeNavBar();
  makeUserInputElement();

  const toDoNameInput = document.querySelector('#todo-name');
  toDoNameInput.addEventListener('input', function(event) {
    console.log('Name: ', event.target.value);
  });

  const toDoDetailsInput = document.querySelector('#todo-details');
  toDoDetailsInput.addEventListener('input', function(event) {
    console.log('Details: ', event.target.value);
  });

  const toDoDueDateInput = document.querySelector('#todo-due-date');
  toDoDueDateInput.addEventListener('input', function(event){
    console.log('Due Date: ', event.target.value);
  });

  const toDoNotesInput = document.querySelector("#todo-notes");
  toDoNotesInput.addEventListener('input', function(event) {
    console.log('Notes: ', event.target.value);
  });

  const toDoPriorityInput = document.querySelectorAll('input[name="todo-priority"]');
  toDoPriorityInput.forEach(function (radioInput){
    radioInput.addEventListener('change', function(event){

        const selectedPriority = document.querySelector('input[name="todo-priority"]:checked');
        if (selectedPriority){
            console.log("Priority: ", selectedPriority.value);
        }
    });
  });

  const toDoCompletedInput = document.querySelectorAll('input[name="todo-completed"]');
  toDoCompletedInput.forEach(function (radioInput){
    radioInput.addEventListener('change', function(event){
        const selectedCompleted = document.querySelector('input[name="todo-completed"]:checked');
        if (selectedCompleted){
            console.log("Completed: ", selectedCompleted.value);
        }
    })
  })







    //Create input function
  //Tie input to create newToDo parameters

  //Each new ToDo element will source the object properties from user input
  //Then the properties of that object will make up the text content of each element in the DOM

