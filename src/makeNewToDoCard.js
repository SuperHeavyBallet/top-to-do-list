import { sortByPriority } from "./sortByPriority";

export function makeNewToDoCard(name, details, dueDate, notes, priority, completed){

    const toDoCardContainer = document.querySelector('.todo-card-container');
    

    ////////Container
    const newToDoCard = document.createElement('div');
    newToDoCard.classList.add('new-todo-card');

    ////////Title
    const newTitleContainer = document.createElement('div');
    const newToDoCardTitle = document.createElement('h3');
    newToDoCardTitle.textContent = name;
    newTitleContainer.classList.add('card-title');
    
    newTitleContainer.appendChild(newToDoCardTitle);
    newToDoCard.appendChild(newTitleContainer);

    /////////Details
    const newDetailsContainer = document.createElement('div');
    const newDetailsPreText = document.createElement('p');
    const newToDoCardDetails = document.createElement('p');
    newDetailsPreText.textContent = 'Details: ';
    newToDoCardDetails.textContent = details;
    newDetailsContainer.classList.add('card-details');

    newDetailsContainer.appendChild(newDetailsPreText);
    newDetailsContainer.appendChild(newToDoCardDetails)
    newToDoCard.appendChild(newDetailsContainer);


    /////////DueDate
    const newDueDateContainer = document.createElement('div');
    const newDueDatePreText = document.createElement('p');
    const newToDoCardDueDate = document.createElement('h4');
    newDueDatePreText.textContent = 'Due: ';
    newToDoCardDueDate.textContent = dueDate;
    newDueDateContainer.classList.add('card-due-date');

    newDueDateContainer.appendChild(newDueDatePreText);
    newDueDateContainer.appendChild(newToDoCardDueDate);
    newToDoCard.appendChild(newDueDateContainer);

    /////////Notes
    const newNotesContainer = document.createElement('div');
    const newNotesPreText = document.createElement('p');
    const newToDoCardNotes = document.createElement('p');
    newNotesPreText.textContent = 'Notes:';
    newToDoCardNotes.textContent = notes;
    newNotesContainer.classList.add('card-notes');

    newNotesContainer.appendChild(newNotesPreText);
    newNotesContainer.appendChild(newToDoCardNotes);
    newToDoCard.appendChild(newNotesContainer);

    /////////Priority
    const newPriorityContainer = document.createElement('div');
    const newPriorityPreText = document.createElement('p');
    const newToDoCardPriority = document.createElement('h3');

    newPriorityPreText.textContent = 'Priority:';
    newPriorityContainer.classList.add('card-priority');

    if (priority === undefined)
    {
        newToDoCardPriority.textContent = 'Medium';
    }
    else
    {
        newToDoCardPriority.textContent = priority;
    }
        
    newPriorityContainer.appendChild(newPriorityPreText);
    newPriorityContainer.appendChild(newToDoCardPriority);
    newToDoCard.appendChild(newPriorityContainer);

    ////////Completed
    const newCompletedContainer = document.createElement('div');
    const newToDoCardCompleted = document.createElement('h3');

    newToDoCardCompleted.textContent = completed;
    newCompletedContainer.classList.add('card-completed');

    newCompletedContainer.appendChild(newToDoCardCompleted);
    newToDoCard.appendChild(newCompletedContainer);

    const cardItemsAsArray = [newToDoCardTitle, newToDoCardDetails, newToDoCardDueDate, newToDoCardNotes, newToDoCardPriority, newToDoCardCompleted];
    for (let i = 0; i < cardItemsAsArray.length; i++)
    {
        if (cardItemsAsArray[i].textContent === '')
        {
            cardItemsAsArray[i].parentElement.classList.add('no-display');
        }

        if (newToDoCardCompleted.textContent === 'yes')
        {
            cardItemsAsArray[i].classList.add('completed-card-info');
        }

        if (newToDoCardCompleted.textContent === 'no')
        {
            cardItemsAsArray[i].classList.add('not-completed-card-info');
        }
        

    }

    if (priority === 'high')
    {
        newToDoCard.classList.add('priority-high');
    }
    else if (priority === 'low')
    {
        newToDoCard.classList.add('priority-low');
    }
    else
    {
        newToDoCard.classList.add('priority-medium');
    }

    /////////Place Card in Completed/NotCompleted Category
    const completedCategory = document.querySelector('.completed');
    const notCompletedCategory = document.querySelector('.not-completed');

    if (completed === 'yes')
    {
        newToDoCard.classList.add('todo-completed');
        completedCategory.appendChild(newToDoCard);
    }
    else
    {
        newToDoCard.classList.add('todo-not-completed');
        notCompletedCategory.appendChild(newToDoCard);
    }


   

    sortByPriority();


}