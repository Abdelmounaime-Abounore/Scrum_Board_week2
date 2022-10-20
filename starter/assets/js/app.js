/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

var title = document.getElementById('title');

var priority = document.getElementById('priority');

var statut = document.getElementById('statut');

var date = document.getElementById('date');

var description = document.getElementById('description');

var save = document.getElementById('save');
save.addEventListener('click', createTask);

// ------------------------------------------------

function createTask() {
    // initialiser task form
    
    // Afficher le boutton save

    // Ouvrir modal form

        var myobjet = {
        Title       : title.value,
        Type        : document.querySelector('.checks:checked').value,
        Priority    : priority.value,
        Statut      : statut.value, 
        Date        : date.value,
        Description : description.value,
        }
        tasks.push(myobjet)
        console.log(tasks);
        clearData();
    }

    function clearData() {
        title.value = '';
        priority.value = document.getElementById('priority  ');
        description.value = '';
    }


function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}