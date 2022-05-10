/*variabile*/
var introMessagecounter = 0;
let str = "\u2713";
var list = document.getElementById("list");

var taskCounter = 0;
var completedTaskCounter = 0;
var clickCounter = 0;

/*functie care afiseaza mesajul de felicitari, verificand daca toate task-urile creeate sunt si complete*/
function checkEquality(){
    if(taskCounter != 0 && taskCounter == completedTaskCounter){
        document.getElementById("finalMessage").style.visibility = "visible";
    }else{
        document.getElementById("finalMessage").style.visibility = "hidden";
    }
};

/* functie care trateaza creerea unui task, setand functia pentru onclick si posibilitatea setarii taskurilor ca fiind complete*/
function addTask(){
    taskCounter++;
    var taskName = document.getElementById("placeholder").value;

    var taskCompletedButton = document.createElement("span");
    taskCompletedButton.setAttribute("class", "dot");
    taskCompletedButton.innerHTML = str;
        
    var task = document.createElement("li");
    task.setAttribute("class", "list-element");
    task.innerHTML = taskName;
    task.onmouseover = function changeCursor(){
        task.style.cursor = "pointer";
    };
    task.onclick =  function isCompleted(){
        if(task.style.textDecoration != 'line-through'){
            task.style.textDecoration = 'line-through';
            completedTaskCounter ++;
            document.getElementById('completedTaskCounter').innerHTML = completedTaskCounter;
            taskCompletedButton.style.visibility = "visible";
            checkEquality();
        } else{
            task.style.textDecoration = 'none';
            completedTaskCounter --;
            document.getElementById('completedTaskCounter').innerHTML = completedTaskCounter;
            taskCompletedButton.style.visibility = "hidden";
            checkEquality();
        }
    };

   var separatingLine = document.createElement("hr");

   var div = document.createElement("div");
   div.setAttribute("id", taskName)
   list.appendChild(div);
   div.appendChild(task);
   div.appendChild(taskCompletedButton);
   div.appendChild(separatingLine);
   introMessagecounter++
   if(introMessagecounter == 1){
       var toDelete = document.getElementById("default");
       toDelete.parentNode.removeChild(toDelete);
   }

   document.getElementById('completedTaskCounter').innerHTML = completedTaskCounter;
   document.getElementById('totalTaskCounter').innerHTML = taskCounter;
   document.getElementById("placeholder").value = "";

};

/*functie care sterge taskuri */
function removeTask(){

    var taskName = document.getElementById("placeholder").value;
    console.log(taskName);
    var taskToDelete = document.getElementById(taskName);
    var taskStyle = taskToDelete.style.textDecoration; 
    console.log(taskStyle.value);
    if(taskToDelete == null){
        alert("Task already deleted or does not exist!");
    }else if(taskStyle = "line-through"){
    list.removeChild(taskToDelete);
    taskCounter--;
    completedTaskCounter--;
    }else if (taskStyle = 'none'){
    list.removeChild(taskToDelete);
    taskCounter--;
    }
   
    if(completedTaskCounter < 0){
    document.getElementById('completedTaskCounter').innerHTML = "0";
    completedTaskCounter = 0;
       }else{
       document.getElementById('completedTaskCounter').innerHTML = completedTaskCounter;
       }
    document.getElementById('totalTaskCounter').innerHTML = taskCounter;
    document.getElementById("placeholder").value = "";
    console.log(completedTaskCounter);

};

