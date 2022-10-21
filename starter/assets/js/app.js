/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */


var todolist = document.getElementById("to-do-tasks");

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
        // clearData();
        saveTask();
    }

    function clearData() {
        title.value = '';
        priority.value = 'Please select';
        statut.value = 'Please select'
        description.value = '';
    }


function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    for (var i = 0; i < tasks.length; i++) {
        if (todolist.statut.value === 'To Do') {
        todolist.innerHTML += `<button class="p-2 d-flex text-start border w-100" style="background-color:#CAEBF2;" id="done">
        <div class="col-md-1">
            <i class="bi bi-question-circle"></i> 
        </div>
        <div class="col-md-11">
            <div class="fw-bold">${tasks[i].title}</div>
            <div class="">
                <div class="text-success">#1 created in ${tasks[i].date}</div>
                <div class=""> ${tasks[i].description} </div>
            </div>
            <div class="">
                <span class="btn btn-info rounded-pill p-2">High</span>
                <span class="btn btn-gray-500 rounded-pill p-2">Feature</span>
            </div>
        </div>
    </button>
    ` 
    }    
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
}
