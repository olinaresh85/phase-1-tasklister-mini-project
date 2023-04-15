document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    AddToDo(e.target.new_task.value);
    dateControler();
    form.reset();
  })

});

function dateControler(){
  
const datePTag = document.createElement('p')
const dateControl = document.querySelector('input[type="date"]');
const date = dateControl.value;
datePTag.textContent = `${date}`
document.querySelector('#tasks').appendChild(datePTag)

}


function AddToDo(newTask){
  const p = document.createElement('p'); // creating a new p tag to add new to do item
  const button = document.createElement('button'); // creating a button next to the to do item
  button.addEventListener('click', deleteToDo); // deleting button and list items along with it
  button.textContent = ' delete ';
  button.style.fontSize = '20px'
  p.textContent = `${newTask}  `;
  document.querySelector('#tasks').appendChild(p);
  p.id = 'new task';
  p.append(button);

}

function chanageH1Style () {
const h1 = document.querySelector('h1');
h1.textContent = 'Reminders™'
h1.style.color = 'beige'
}

chanageH1Style();

function deleteToDo(c){
  c.target.parentNode.remove();
  c.target
}

function changeInputStyle() { 
let inputerr = document.querySelectorAll('input')
inputerr.forEach(input=>input.style.fontSize="20px")

}
changeInputStyle();



