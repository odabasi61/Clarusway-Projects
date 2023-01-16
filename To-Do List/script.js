"use strict";

let total = 0;
let completed = 0;

const note = document.querySelector(".note");
const add = document.querySelector(".add");
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const totalNotes = document.querySelector(".total");
const totalCompleted = document.querySelector(".completed");

add.addEventListener("click", () => {
  !note.value
    ? alert("Please write down your note.")
    : (ul.innerHTML += `<li><ion-icon class='red check'  name="checkmark-outline"></ion-icon><p class='par'>${note.value}</p><ion-icon class='red delete' name="trash-outline"></ion-icon></li>`);
  note.value = "";
  note.focus();
  total++;
  totalNotes.textContent = total;
});

// delete and complete functions

// assignments to keys in keyboard

note.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    add.click();
  }
  if (e.code === "Escape") {
    note.value = "";
  }
});

{
  /* <html>
  <body>
    <h1>To-Do List</h1>
    <form>
      <input type="text" id="task" placeholder="Enter a task...">
      <button type="button" onclick="addTask()">Add Task</button>
    </form>
    <ul id="todo-list"></ul>

    <script>
      function addTask() {
        // Get the task input
        var task = document.getElementById("task").value;

        // Create a new list item
        var todoItem = document.createElement("li");
        todoItem.innerHTML = task;

        // Create checkbox
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        todoItem.appendChild(checkbox);

        // Create delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.onclick = function() {
          todoItem.remove();
        };
        todoItem.appendChild(deleteBtn);

        // Add the new task to the to-do list
        document.getElementById("todo-list").appendChild(todoItem);

        // Clear the task input
        document.getElementById("task").value = "";
      }
    </script>
  </body>
</html> */
}
