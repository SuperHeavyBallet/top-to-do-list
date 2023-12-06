export function sortByPriority(completedCategory, notCompletedCategory, project){


    // Creating Arrays from the completed and not completed DOM elements

    const completedArray = Array.from(completedCategory.children);
    const notCompletedArray = Array.from(notCompletedCategory.children);



    

    

    // Assigning pre-final merged and ordered arrays
    const mergedOrderedCompleteArray = sortingPriorityAndDate(completedArray);
    const mergedOrderedNotCompleteArray = sortingPriorityAndDate(notCompletedArray);



    //Finally re-append the newly sorted to-do cards to the DOM, updating based on order
    mergedOrderedCompleteArray.forEach(item => completedCategory.appendChild(item));
    mergedOrderedNotCompleteArray.forEach(item => notCompletedCategory.appendChild(item));



function sortingPriorityAndDate(inputArray)
{

    // Create temporary Arrays for each priority
    const tempHighPriorityArray = [];
    const tempMedPriorityArray = [];
    const tempLowPriorityArray = [];

    // Check if each element in the input array (Existing to-do cards in the DOM)
    // contain a priority of HIGH or LOW, if not sort as MEDIUM
    for (let i = 1; i <inputArray.length; i++)
    {
        if (inputArray[i].classList.contains('priority-high'))
        {
            tempHighPriorityArray.push(inputArray[i]);
        }
        else if (inputArray[i].classList.contains('priority-low'))
        {
            tempLowPriorityArray.push(inputArray[i]);
        }
        else
        {
            tempMedPriorityArray.push(inputArray[i]);
        }

        console.log('High', tempHighPriorityArray);
        console.log('Med', tempMedPriorityArray);
        console.log('Low', tempLowPriorityArray);

        //Grab the DUE DATE from the DOM element's child node(Date assigned in input)


        const childrenElements = inputArray[i].children;
        let dateElement;
        let dueDate;



        for (let i = 1; i < childrenElements.length; i++)
        {
            if (childrenElements[i].classList.contains('card-due-date'))
            {
                dateElement = childrenElements[i];
                console.log('Date El' , dateElement);

                for (let j = 0; j < dateElement.children.length; j++)
                {
                    if (dateElement.children[j].classList.contains('post-text'))
                    {
                        dueDate = dateElement.children[j].textContent;
                        console.log('due', dueDate);
                        break;
                        
                    }
                    
                }

                break;

            }
            else
            {
                dueDate = undefined;
                        
            }

            
        }


        if (dueDate === undefined)
        {

            console.log("Invalid Date");
            
        }
        else
        {
            const newDate = new Date(dueDate);
            console.log('Date' , newDate);
            inputArray[i].dateObject = newDate;
            console.log(typeof(inputArray[i]));
            console.log(inputArray[i]);



        }




    }



        console.log(tempMedPriorityArray);

    

    // Sort each of the Priority Arrays By Date
    tempHighPriorityArray.sort((a,b) => sortByDate(a,b));
    tempMedPriorityArray.sort((a,b) => sortByDate(a,b));
    tempLowPriorityArray.sort((a,b) => sortByDate(a,b));

    // Return a merged array of the fully sorted 3 arrays
    return [...tempHighPriorityArray, ...tempMedPriorityArray, ...tempLowPriorityArray];

}




    // Function to sort by Date
    function sortByDate(a,b){

        //Handle INVALID date entry
        if (a.dateObject === null && b.dateObject === null)
        {
            return 0;
        }
        
        if (a.dateObject === null)
        {
            return 1;
        }

        if (b.dateObject === null)
        {
            return -1;
        }

        //Handle VALID date entry
        return a.dateObject - b.dateObject;
    }




    function getCompletedCategory()
  {
    const completedCategories = Array.from(document.querySelectorAll('.completed'));
    let selectedCompletedCategory;
    

    for (let i = 0; i < completedCategories.length; i++)
    {
      let parentOfCompletedCategory = completedCategories[i].parentElement;

      if (parentOfCompletedCategory.parentElement.id === project)
      {
        selectedCompletedCategory = completedCategories[i];
        break; 
      }
      else
      {
        selectedCompletedCategory = completedCategories[0];
      }
    }

    return selectedCompletedCategory;

    
  }

  function getNotCompletedCategory()
  {
    const notCompletedCategories = Array.from(document.querySelectorAll('.not-completed'));
    let selectedNotCompletedCategory;


    for (let i = 0; i < notCompletedCategories.length; i++)
    {
      let parentOfNotCompletedCategory = notCompletedCategories[i].parentElement;

      if (parentOfNotCompletedCategory.parentElement.id === project)
      {
        selectedNotCompletedCategory = notCompletedCategories[i];
        break; 
      }
      else
      {
        selectedNotCompletedCategory = notCompletedCategories[0];
      }
    }

    return selectedNotCompletedCategory;

  }



}