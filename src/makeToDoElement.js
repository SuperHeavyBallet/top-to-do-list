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

  const newToDoContainer = document.querySelector('.newToDoContainer');

  const newToDoElement = document.createElement('div');
  newToDoElement.classList.add('new-to-do-element');


    return new toDoElement();

    
  }




