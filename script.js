const btn1 = document.getElementById("btn1");
const newcontainer= document.getElementById("cont2");
const clearnewpage = document.getElementById("btn3");
const addtask=document.getElementById("btn4");
const cont1=document.getElementById("cont1");
const title=document.getElementById("title");
const description=document.getElementById("description");
const clearAlltask=document.getElementById("btn2")
function newpage(){
    newcontainer.style.display="flex"
}
btn1.addEventListener('click',newpage)
function clearpage(){
    newcontainer.style.display="none"
}
clearnewpage.addEventListener('click',clearpage);
function addtasks(){
    let taskh1text = title.value
    let taskptext=description.value
    if(taskh1text==""||taskptext==""){
        alert("Please enter both Title and Description!");
        return;
    }
    let taskcontainer=document.createElement("div")
    taskcontainer.classList.add("taskcontainer")
    taskcontainer.style.display="flex"
    taskcontainer.innerHTML=`<h1 class="taskh1">${taskh1text}</h1>
    <p class="taskp">${taskptext}</p>
    <div class="task-edit-clear">
        <button class="btngreen">Edit Task</button>
        <button class="btn5">Clear Task</button>
    </div>`
    cont1.firstElementChild.insertAdjacentElement('afterend',taskcontainer)
    newcontainer.style.display="none"
    title.value = "";
    description.value = "";
    let editBtn=taskcontainer.querySelector(".btngreen");
    function editTask(){
        newcontainer.style.display="flex";
        title.value=taskh1text;
        description.value=taskptext;
        taskcontainer.remove()
    }
    editBtn.addEventListener('click',editTask)
    let clearBtn = taskcontainer.querySelector(".btn5");
    function cleatask(){
        taskcontainer.remove()
    }
    clearBtn.addEventListener('click',cleatask)
}
addtask.addEventListener('click',addtasks)
function clearEveryTask(){
    let alltask=document.querySelectorAll(".taskcontainer")
    alltask.forEach(tasks=>tasks.remove())
}
clearAlltask.addEventListener('click',clearEveryTask)   