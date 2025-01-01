let tasks=[];
renderTodo();
function addEvent(){

  const work= document.querySelector(".task-input-js").value;
  const date= document.querySelector(".date-input-js").value;
  tasks.push({task:work,date:date });
  
  renderTodo();
}

function renderTodo(){
  let display="";
  for(let i=0; i<tasks.length; i++){
    let todo= tasks[i].task;
    let date= tasks[i].date;
    display+= `<div class="input-event">${todo}</div> 
    <div class="input-date" >${date}</div> 
    <button class="delete-button" 
      onclick="tasks.splice(${i},1); renderTodo();">delete</button>`
  }
  document.querySelector(".display-js").innerHTML=display;
}

