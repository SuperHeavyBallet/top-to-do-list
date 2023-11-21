export function makeNavBar(){


    const documentBody = document.querySelector('body');
    const navBarContainer = document.createElement('nav');

    navBarContainer.classList.add('navbar');

    const navBarTitle = document.createElement('h2');
    navBarTitle.textContent = ('To Do List');
    
    navBarContainer.appendChild(navBarTitle);
    documentBody.appendChild(navBarContainer);
    
  }