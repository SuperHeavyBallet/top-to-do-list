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
 // Completed = Green
 // Not Completed = Red

 // algorithm to sort by priority
 // use text content of each card to build priority map