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

    const completedCategory = document.querySelector('.completed');
    const notCompletedCategory = document.querySelector('.not-completed');

    if (completed === 'yes')
    {
        completedCategory.appendChild(newToDoCard);
    }
    else
    {
        notCompletedCategory.appendChild(newToDoCard);
    }


}