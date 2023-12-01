import { sortByPriority } from "./sortByPriority";

export function makeToDoElement(name, details, dueDate, notes, priority, completed) {

    class toDoElement {

        constructor(){
            this.name = name;
            this.details = details;
            this.dueDate = dueDate;
            this.notes = notes;
            this.priority = priority;
            this.completed = completed;
        }
  }

  const completedCategory = document.querySelector('.completed');
  const notCompletedCategory = document.querySelector('.not-completed');

  

  createNewCard();


  function createNewCard()
  {
      //container
      const newToDoCard = document.createElement('div');
      newToDoCard.classList.add('new-todo-card');

  

      //title
      const titleContainer = document.createElement('div');
      const titleText = document.createElement('h3');
      
      
      titleText.textContent = name;

      titleContainer.appendChild(titleText);
      newToDoCard.appendChild(titleContainer);




      //details
      const detailsContainer = document.createElement('div');
      const preDetailsText = document.createElement('p');
      const detailsText = document.createElement('p');

      preDetailsText.textContent = 'Details: ';
      detailsText.textContent = details;

      detailsContainer.classList.add('card-details');
      preDetailsText.classList.add('pre-text');
      detailsText.classList.add('post-text');

      detailsContainer.appendChild(preDetailsText);
      detailsContainer.appendChild(detailsText);
      newToDoCard.appendChild(detailsContainer);




      //duedate
      const dueDateContainer = document.createElement('div');
      const preDueDateText = document.createElement('p');
      const dueDateText = document.createElement('h4');

      preDueDateText.textContent = 'Due: ';
      dueDateText.textContent = dueDate;

      dueDateContainer.classList.add('card-due-date');
      preDueDateText.classList.add('pre-text');
      dueDateText.classList.add('post-text');

      dueDateContainer.appendChild(preDueDateText);
      dueDateContainer.appendChild(dueDateText);
      newToDoCard.appendChild(dueDateContainer);




      //notes
      const notesContainer = document.createElement('div');
      const preNotesText = document.createElement('p');
      const notesText = document.createElement('p');

      preNotesText.textContent = 'Notes: ';
      notesText.textContent = notes;

      notesContainer.classList.add('card-notes');
      preNotesText.classList.add('pre-text');
      notesText.classList.add('post-text');

      notesContainer.appendChild(preNotesText);
      notesContainer.appendChild(notesText);
      newToDoCard.appendChild(notesContainer);

    


      //priority
      const priorityContainer = document.createElement('div');
      const prePriorityText = document.createElement('p');
      const priorityText = document.createElement('h3');

      prePriorityText.textContent = 'Priority: ';

      priorityContainer.classList.add('card-priority');
      prePriorityText.classList.add('pre-text');
      priorityText.classList.add('post-text');

      if (priority === undefined)
      {
        priorityText.textContent = 'Medium';
      }
      else
      {
        priorityText.textContent = priority;
      }

      priorityContainer.appendChild(prePriorityText);
      priorityContainer.appendChild(priorityText);
      newToDoCard.appendChild(priorityContainer);

    


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


      //
      if (completed === 'yes')
      {
        completedCategory.appendChild(newToDoCard);
        titleContainer.classList.add('card-title-completed');
        newToDoCard.classList.add('todo-completed');
      }
      if (completed === 'no')
      {
        notCompletedCategory.appendChild(newToDoCard);
        titleContainer.classList.add('card-title-not-completed');
        newToDoCard.classList.add('todo-not-completed');
      }    

      const cardElementsAsArray = 
      [
        titleText, 
        detailsText, 
        dueDateText,
        notesText,
        priorityText
      ];

      for (let i = 0; i < cardElementsAsArray.length; i++)
      {
        if (cardElementsAsArray[i].textContent === '')
        {
          cardElementsAsArray[i].parentElement.remove();
        }
      }
      


      if (completed === 'yes')
      {
        const preTextClasses = Array.from(document.querySelectorAll('.pre-text'));

        for (let i = 0; i < preTextClasses.length; i++)
        {

          if (i != 1)
          {
            preTextClasses[i].classList.remove('pre-text');
            preTextClasses[i].classList.add('no-display');
          }
          
        }

        const postTextClasses = Array.from(document.querySelectorAll('.post-text'));
        for (let i = 0; i < postTextClasses.length; i++)
        {
          if (i != 1)
          {
            postTextClasses[i].classList.remove('post-text');
            postTextClasses[i].classList.add('no-display');
          }
        }
        
      }

   

      

  }

  

  //
  
  
  




  sortByPriority();

    
  }




