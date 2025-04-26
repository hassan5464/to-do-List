// This is the JavaScript code for a simple task management application.
// It allows users to add tasks to a list and displays them on the webpage.
const doneSound = new Audio("assets/you-win-sequence-2-183949.mp3");


document.querySelector("#add").addEventListener("click", function(){
  if (document.querySelector(".newTask input").value.length == 0){
    alert("Please enter a task");
  }else{

      document.querySelector("#tasks").innerHTML +=`
      <div class="task">
        <span class="taskName">
        ${document.querySelector("#task-input").value}
        </span>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
      </div>
      `;

      let current_tasks = document.querySelectorAll(".delete");
      for(let i =0; i< current_tasks.length; i++){
        current_tasks[i].onclick = function(){
          this.parentNode.remove();

        }
      }
      let tasks = document.querySelectorAll(".taskName");
      for(let i = 0; i< tasks.length ; i++){

        tasks[i].onclick = function(){
          this.classList.toggle("completed");
          doneSound.play();
        }
      }
      document.querySelector(".newTask input"). value = "";
  }

})


