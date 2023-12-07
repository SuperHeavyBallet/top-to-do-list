import _ from 'lodash';
import { makeNavBar } from './makeNavBar';
import { makeToDoContainer } from './makeToDoContainer';
import { makeUserInputElement } from './makeUserInputElement';
import { assignEventListeners } from './assignEventListeners';
import { makeProjectContainer } from './makeProjectContainer';
import { makeToDoCardContainer } from './makeToDoCardContainer';
import { storageAvailable } from './localStorage';










    if (storageAvailable("localStorage"))
    {
        console.log("Yippee! We can use localStorage");
    }
    else
    {
        console.log("Too bad, no localStorage for us");
    }
    
    makeNavBar();



    makeToDoContainer();

    

    makeUserInputElement();

    

    assignEventListeners();


    
  

 



  





//PRIORITY
// REFACTOR TO SOURCE EVERYTHING FROM ORIGINAL OBJECT, REDUCE SPAGHETTI


// add div container for each card text item
//inside container place item description, eg: 'Due:' + item data
//fix the code that breaks from this

 // add completed/not completed checkbox
 // edit card?

 //if priority input == '' > text content = medium