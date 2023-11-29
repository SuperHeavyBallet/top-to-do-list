export function sortByPriority(){

    // Initial DOM elements assigning
    const completedToDoCategory = document.querySelector('.completed');
    const notCompletedToDoCategory = document.querySelector('.not-completed');

    // Creating Arrays from the completed and not completed DOM elements


    const completedArray = Array.from(document.querySelectorAll('.todo-completed'));
    
    const notCompletedArray = Array.from(document.querySelectorAll('.todo-not-completed'));



    // Assigning pre-final merged and ordered arrays
    const mergedOrderedCompleteArray = sortingPriorityAndDate(completedArray);
    const mergedOrderedNotCompleteArray = sortingPriorityAndDate(notCompletedArray);



    //Finally re-append the newly sorted to-do cards to the DOM, updating based on order
    mergedOrderedCompleteArray.forEach(item => completedToDoCategory.appendChild(item));
    mergedOrderedNotCompleteArray.forEach(item => notCompletedToDoCategory.appendChild(item));



    function sortingPriorityAndDate(inputArray)
    {

        // Create temporary Arrays for each priority
        const tempHighPriorityArray = [];
        const tempMedPriorityArray = [];
        const tempLowPriorityArray = [];

        // Check if each element in the input array (Existing to-do cards in the DOM)
        // contain a priority of HIGH or LOW, if not sort as MEDIUM
        for (let i = 0; i <inputArray.length; i++)
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

            //Grab the DUE DATE from the DOM element's child node(Date assigned in input)
            const dueDate  = inputArray[i].childNodes[2].textContent;
        
            // Check if valid DUE DATE is provided by the user
            if (dueDate.trim() !== '')
            {
                const dateObject = new Date(dueDate);

                if (!isNaN(dateObject))
                {
                    //Handle valid date
                    inputArray[i].dateObject = dateObject;
                }
                else{
                    //Handle invalid date
                    console.log('Invalid date for item');
                }
            }
            else
            {
                // No due date provided
                inputArray[i].dateObject = null;
            }
        }

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



}