import { sortByPriority } from "./sortByPriority";

export function makeToDoElement(name, details, dueDate, notes, priority, completed, project) {

    class toDoElement {

        constructor(){
            this.name = name;
            this.details = details;
            this.dueDate = dueDate;
            this.notes = notes;
            this.priority = priority;
            this.completed = completed;
            this.project = project;
        }
  }

  const projectToAssignTo = getSelectedProject();
  

  const completedCategory = getCompletedCategory();
  const notCompletedCategory = getNotCompletedCategory();


  

  createNewCard();
  
  function getSelectedProject()
  {
    const defaultproject = document.querySelector('#defaultproject');

    const allProjects = Array.from(document.querySelectorAll('.project-container'));
    let selectedProject;

    for (let i = 0; i < allProjects.length; i++)
    {
      if (allProjects[i].id === project)
      {
        selectedProject = allProjects[i];
        break;
      }
      else
      {
        selectedProject = defaultproject;
        
      }

    }

    

    //console.log (allProjects);
    //console.log(selectedProject);
    return selectedProject;
      
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


      createHideDetailsButton(newToDoCard, completed);
      createDeleteToDoButton(newToDoCard, titleContainer);
      


     

   

      

  }

  

  function createHideDetailsButton(thisCard, completedStatus){

    const hideDetailsButtonContainer = document.createElement('div');
    const hideDetailsButton = document.createElement('button');
    const toDoCard = thisCard;

    if (completedStatus === 'yes')
    {
      hideDetailsButtonContainer.classList.add('hide-button-completed');
    }
    else if (completedStatus === 'no')
    {
      hideDetailsButtonContainer.classList.add('hide-button-not-completed');
    }

    hideDetailsButton.textContent = 'Hide Details';
    hideDetailsButton.classList.add('hide-details-button');

    hideDetailsButtonContainer.appendChild(hideDetailsButton);


    thisCard.appendChild(hideDetailsButtonContainer);

    

    hideDetailsButton.addEventListener('click', () =>{


      
      const childrenOfThisCard = toDoCard.children;
      const childrenOfChildren = [];

      if (hideDetailsButton.textContent === 'Hide Details')
      {

        hideDetailsButton.textContent = 'Show Details';

        for (let i = 1; i < childrenOfThisCard.length -1; i++)
        {

          
          
          for (let j = 0; j < childrenOfThisCard[i].children.length; j++)
          {
            childrenOfChildren.push(childrenOfThisCard[i].children[j]);
            childrenOfChildren.push(childrenOfThisCard[i].children[j].classList.remove('display'));
            childrenOfChildren.push(childrenOfThisCard[i].children[j].classList.add('no-display'));
          }
        }

      }
      else if (hideDetailsButton.textContent === 'Show Details')
      {

        hideDetailsButton.textContent = 'Hide Details';

        for (let i = 1; i < childrenOfThisCard.length -1; i++)
        {
          

          for (let j = 0; j < childrenOfThisCard[i].children.length; j++)
          {
            childrenOfChildren.push(childrenOfThisCard[i].children[j]);
            childrenOfChildren.push(childrenOfThisCard[i].children[j].classList.remove('no-display'));
            childrenOfChildren.push(childrenOfThisCard[i].children[j].classList.add('display'));
          }
        }
      }
    });

  }

  function hideShowButton()
  {
    
  }

  function createDeleteToDoButton(thisCard, titleContainer)
  {
    const deleteButtonContainer = document.createElement('div');
    const deleteButton = document.createElement('button')
    const toDoCard = thisCard;
    deleteButton.textContent = 'X';

    deleteButtonContainer.appendChild(deleteButton);
    titleContainer.appendChild(deleteButtonContainer);

    deleteButton.addEventListener('click', () => 
    {
      thisCard.remove();
      sortByPriority(completedCategory, notCompletedCategory, project);
    });
  }
  
  
  




  sortByPriority(completedCategory, notCompletedCategory, project);

    
  }




