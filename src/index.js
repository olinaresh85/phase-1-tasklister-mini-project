document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    AddToDo(e.target.new_task.value);
    
  })

});


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


function deleteToDo(c){
  c.target.parentNode.remove();
}

