/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
let globalvar;
var form = document.getElementById("form");
// form.addEventListener("submit",updateTask)

// ------------------------------------------------

function afficher() {
    // initialiser task form
    
    // Afficher le boutton save

    // Ouvrir modal form

var para1 = document.getElementById('to-do-tasks-count');
var counter1 = 0;
var para2 = document.getElementById('in-progress-tasks-count');
var counter2 = 0;
var para3 = document.getElementById('done-tasks-count');
var counter3 = 0;

var todotasks = document.getElementById('to_do');
todotasks.innerHTML = '';

for(var i = 0; i < tasks.length; i++) {
    if (tasks[i].statut == 'To Do') {
        counter1++;
        para1.innerHTML = counter1;  
        todotasks.innerHTML += `
       <button 
       data-bs-toggle="modal" data-bs-target="#exampleModal"
       onclick = editTask(${i})  class="p-2 d-flex text-start border w-100" style="background-color:#CAEBF2;" id="to_do">
       <div class="col-md-1">
           <i class="bi bi-question-circle"></i> 
       </div>
       <div class="col-md-11">
           <div class="fw-bold">${tasks[i].title}</div>
           <div class="">
               <div class="text-success">#${i+1} created in ${tasks[i].date}</div>
               <div class="" >${tasks[i].description}</div>
           </div>
           <div class="">
               <span class="btn btn-info rounded-pill p-2">${tasks[i].priority}</span>
               <span class="btn btn-gray-500 rounded-pill p-2">${tasks[i].type}</span>
           </div>
       </div>
       </button>
       `
    }
}

var inprogress = document.getElementById('in-progress-tasks');
inprogress.innerHTML = '';


for(i = 0; i < tasks.length; i++) {
    if (tasks[i].statut == 'In Progress') {
        counter2++;
        para2.innerHTML = counter2; 
        inprogress.innerHTML += `
        <button 
        data-bs-toggle="modal" data-bs-target="#exampleModal"
        onclick = editTask(${i}) class="d-flex text-start border w-100" style="background-color:#CAEBF2;">
        <div class="col-md-1">
            <i class="spinner-border spinner-border-sm"></i> 
        </div>
        <div class="col-md-11">
            <div class="fw-bold">${tasks[i].title}</div>
            <div class="">
                <div class="text-success">#${i+1} created in ${tasks[i].date}</div>
                <div class="">${tasks[i].description}</div>
            </div>
            <div class="">
                <span class="btn btn-info rounded-pill p-2">${tasks[i].priority}</span>
                <span class="btn btn-gray-500 rounded-pill p-2">${tasks[i].type}</span>
            </div>
        </div>
    </button>
       `
    }
}

var donetasks = document.getElementById('done-tasks');
donetasks.innerHTML = '';


for(i = 0; i < tasks.length; i++) {
    if (tasks[i].statut == 'Done') {
        counter3++;
        para3.innerHTML = counter3; 
        donetasks.innerHTML += `
        <button 
        data-bs-toggle="modal" data-bs-target="#exampleModal"
        onclick = editTask(${i}) class="d-flex text-start border w-100" style="background-color:#CAEBF2;">
        <div class="col-md-1">
            <i class="bi bi-check-circle"></i> 
        </div>
        <div class="col-md-11">
            <div class="fw-bold"">${tasks[i].title}</div>
            <div class="">
                <div class="text-success">${i+1} created in ${tasks[i].date}</div>
                <div class="">${tasks[i].description}</div>
            </div>
            <div class="">
                <span class="btn btn-info rounded-pill p-2">${tasks[i].priority}</span>
                <span class="btn btn-gray-500 rounded-pill p-2">${tasks[i].type}</span>
            </div>
        </div>
    </button>
       `
    }
  }
}

var title = document.getElementById('title');
var priority = document.getElementById('priority');
var statut = document.getElementById('statut');
var date = document.getElementById('date');
var description = document.getElementById('description');

function addTaks(){

var myObject = {
    title         : title.value,
    type          : document.querySelector('.checks:checked').value,
    priority      : priority.value,
    statut        : statut.value,
    date          : date.value,
    description   : description.value,     
}

tasks.push(myObject);
afficher();
clearData();
}


    function clearData() {
        title.value = '';
        priority.value = 'Please select';
        statut.value = 'Please select'
        description.value = '';
    }

    function checktypebtn(i)
    {
        if(tasks[i].type=='Feature')
        
        {
            document.querySelector('#gridRadios1').checked = true ;
        }
        else
        {
            document.querySelector('#gridRadios2').checked = true ;
        }

    }
function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
       
}

var update = document.getElementById('update');
var suprimer = document.getElementById('delete');
var save = document.getElementById('save');

function editTask(i) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
    globalvar = i;
    update.style.display = 'block';
    suprimer.style.display = 'block';
    save.style.display = 'none';

    title.value = tasks[i].title;
    priority.value = tasks[i].priority;
    checktypebtn(i);
    statut.value = tasks[i].statut;
    date.value = tasks[i].date;
    description.value = tasks[i].description;
}
function saveButon() {
    save.style.display = 'block';
    update.style.display = 'none';
    suprimer.style.display = 'none';
    clearData();
}
console.log(update);
let closebtn = document.querySelector('.close');

function updateTask() {
    
    // e.preventDefault() 
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
     
    tasks[globalvar].title = title.value;
    tasks[globalvar].type = document.querySelector('.checks:checked').value;
    tasks[globalvar].priority = priority.value;
    tasks[globalvar].statut = statut.value;
    tasks[globalvar].date = date.value;
    tasks[globalvar].description = description.value;
    
   // closebtn.click();
//    $('#exampleModal').modal('hide');
    afficher();
    
}


function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
    tasks.splice(globalvar,1);
    // closebtn.click();

    afficher()
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements
    
    // Set Task count
}

