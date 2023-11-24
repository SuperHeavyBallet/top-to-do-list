export function sortByPriority(){

    const completedToDoCategory = document.querySelector('.completed');
    const notCompletedToDoCategory = document.querySelector('.not-completed');

    const completedNodeList = document.querySelectorAll('.todo-completed');
    let completedArray = Array.from(completedNodeList);
    const compLowPriorityArray = [];
    const compMediumPriorityArray = [];
    const compHighPriorityArray = [];

    const notCompletedNodeList = document.querySelectorAll('.todo-not-completed');
    let notCompletedArray = Array.from(notCompletedNodeList);
    const notCompLowPriorityArray = [];
    const notCompMediumPriorityArray = [];
    const notCompHighPriorityArray = [];



    //Sort Completed into Priority Arrays
    for (let i = 0; i < completedArray.length; i++)
    {
        if (completedArray[i].classList.contains('priority-high'))
        {
            compHighPriorityArray.push(completedArray[i]);
        }
        else if (completedArray[i].classList.contains('priority-low'))
        {
            compLowPriorityArray.push(completedArray[i]);
        }
        else {
            compMediumPriorityArray.push(completedArray[i]);
        }
    }

    const mergedOrderedCompleteArray = [...compHighPriorityArray, ...compMediumPriorityArray, ...compLowPriorityArray];
    console.log(mergedOrderedCompleteArray);

    //Sort Completed into Priority Arrays
    for (let i = 0; i < notCompletedArray.length; i++)
    {
        if (notCompletedArray[i].classList.contains('priority-high'))
        {
            notCompHighPriorityArray.push(notCompletedArray[i]);
        }
        else if (notCompletedArray[i].classList.contains('priority-low'))
        {
            notCompLowPriorityArray.push(notCompletedArray[i]);
        }
        else {
            notCompMediumPriorityArray.push(notCompletedArray[i]);
        }
    }

    const mergedOrderedNotCompleteArray = [...notCompHighPriorityArray, ...notCompMediumPriorityArray, ...notCompLowPriorityArray];
    console.log(mergedOrderedNotCompleteArray);

    for (let i = 0; i <mergedOrderedCompleteArray.length; i++)
    {
        completedToDoCategory.appendChild(mergedOrderedCompleteArray[i]);
    }
    
    for (let i = 0; i < mergedOrderedNotCompleteArray.length; i++)
    {
        notCompletedToDoCategory.appendChild(mergedOrderedNotCompleteArray[i]);
    }
    






    

    
    



}