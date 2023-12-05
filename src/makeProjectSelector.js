

export function makeProjectSelector()
{
//Creates the choice of project to assign ToDo to



                
    const projectSelect = document.querySelector('#project-select');
            
    while (projectSelect.firstChild)
    {
        projectSelect.removeChild(projectSelect.lastChild);
    }

                
                
    const existingProjects = Array.from(document.querySelectorAll('.project-container'));
                
            

    for (let i = 0; i < existingProjects.length; i++)
    {
        const projectSelectOption = document.createElement('option');
                    
        projectSelectOption.textContent = existingProjects[i].children[0].textContent;
        const projectNameAsLowerString = existingProjects[i].children[0].textContent.toLowerCase();
        const projectNameWithoutSpaces = projectNameAsLowerString.replaceAll(" ", "");
        
        projectSelectOption.setAttribute('value', projectNameWithoutSpaces);

        projectSelect.appendChild(projectSelectOption);
                    
    }

                
                
}