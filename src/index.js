document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    AddToDo(e.target.new_task.value);
    form.reset();
  })

});


function AddToDo(newTask){
  const p = document.createElement('p'); // creating a new p tag to add new to do item
  const button = document.createElement('button'); // creating a button next to the to do item
  button.addEventListener('click', deleteToDo); // deleting button and list items along with it
  button.textContent = 'delete';
  button.style.fontSize = '12px'
 
  
  const dateControl = document.querySelector('input[type="date"]');
  const date = dateControl.value;


  p.textContent = `${newTask} by ${date.toString().slice(5,10)}  `;
  document.querySelector('#tasks').appendChild(p);
  p.append(button);

}



function chanageH1Style () {
const h1 = document.querySelector('h1');
h1.textContent = 'Reminders™'
h1.style.color = 'purple'
}

chanageH1Style();

function deleteToDo(c){
  c.target.parentNode.remove();
}

function changeInputStyle() { 
let inputerr = document.querySelectorAll('input')
inputerr.forEach(input=>input.style.fontSize="30px")

}
changeInputStyle();



