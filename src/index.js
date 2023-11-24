import _ from 'lodash';
import { makeNavBar } from './makeNavBar';
import { makeToDoContainer } from './makeToDoContainer';
import { makeUserInputElement } from './makeUserInputElement';
import { assignEventListeners } from './assignEventListeners';
import { makeToDoCardContainer } from './makeToDoCardContainer';



  console.log('Hello?');







    makeNavBar();

    makeToDoContainer();
    

    makeUserInputElement();
    

    assignEventListeners();

    makeToDoCardContainer();



  






    //Create input function
  //Tie input to create newToDo parameters

  //Each new ToDo element will source the object properties from user input
  //Then the properties of that object will make up the text content of each element in the DOM

