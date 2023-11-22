import _ from 'lodash';
import { makeNavBar } from './makeNavBar';
import { ToDoElement } from './makeToDoElement';
import { makeUserInputElement } from './makeUserInputElement';

//Test stuff
  console.log('Hello?');



  const newToDo = ToDoElement('Brian', 'Wash The Car', '13/11/1990', 'High', 'Use Shampoo', 6);
  const newToDo1 = ToDoElement('Bob', 'Wash The Baby', 'Whenever', 'Low', 'Meh', 6);
  
  console.log(newToDo);
  console.log(newToDo1);
///






  makeNavBar();
  makeUserInputElement();





    //Create input function
  //Tie input to create newToDo parameters

  //Each new ToDo element will source the object properties from user input
  //Then the properties of that object will make up the text content of each element in the DOM

