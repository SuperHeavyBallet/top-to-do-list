export function makeProjectContainer(projectName)
{
    const todoCardContainer = document.querySelector('.todo-container');

    const newProject = document.createElement('div');
    newProject.classList.add('project-container');
    const newProjectTitle = document.createElement('div');
    newProjectTitle.textContent = projectName;
    newProjectTitle.classList.add('category-header');
    
    newProject.appendChild(newProjectTitle);
    todoCardContainer.appendChild(newProject);
}