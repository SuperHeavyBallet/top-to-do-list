import _ from 'lodash';
import { makeNavBar } from './makeNavBar';
import { makeToDoContainer } from './makeToDoContainer';
import { makeUserInputElement } from './makeUserInputElement';
import { assignEventListeners } from './assignEventListeners';
import { makeToDoCardContainer } from './makeToDoCardContainer';










    makeNavBar();

    makeToDoContainer();
    

    makeUserInputElement();
    

    assignEventListeners();

    makeToDoCardContainer();



  






 // Make To Do/Completed mandatory


 // if no due date supplied, add text content 'No Due Date'
 // add completed/not completed checkbox
 // edit card?