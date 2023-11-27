import { sortByPriority } from "./sortByPriority";

export function makeNewToDoCard(name, details, dueDate, notes, priority, completed){

    const toDoCardContainer = document.querySelector('.todo-card-container');
    

    const newToDoCard = document.createElement('div');
    newToDoCard.classList.add('new-todo-card');

    const newToDoCardTitle = document.createElement('h3');
    newToDoCardTitle.textContent = name;
    newToDoCard.appendChild(newToDoCardTitle);

    const newToDoCardDetails = document.createElement('p');
    newToDoCardDetails.textContent = details;
    newToDoCard.appendChild(newToDoCardDetails);

    const newToDoCardDueDate = document.createElement('h4');
    newToDoCardDueDate.textContent = dueDate;
    newToDoCard.appendChild(newToDoCardDueDate);

    const newToDoCardNotes = document.createElement('p');
    newToDoCardNotes.textContent = notes;
    newToDoCard.appendChild(newToDoCardNotes);

    const newToDoCardPriority = document.createElement('h3');
    newToDoCardPriority.textContent = priority;
    newToDoCard.appendChild(newToDoCardPriority);

    const newToDoCardCompleted = document.createElement('h3');
    newToDoCardCompleted.textContent = completed;
    newToDoCard.appendChild(newToDoCardCompleted);

    const cardItemsAsArray = [newToDoCardTitle, newToDoCardDetails, newToDoCardDueDate, newToDoCardNotes, newToDoCardPriority, newToDoCardCompleted];
    for (let i = 0; i < cardItemsAsArray.length; i++)
    {
        if (cardItemsAsArray[i].textContent === '')
        {
            cardItemsAsArray[i].classList.add('no-display');
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