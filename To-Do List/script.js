"use strict";

let total = 0;
let completed = 0;

const note = document.querySelector(".note");
const add = document.querySelector(".add");
const ul = document.querySelector("ul");
const totalNotes = document.querySelector(".total");
const totalCompleted = document.querySelector(".completed");
const isEmpty = (str) => !str.trim().length;
add.addEventListener("click", () => {
  if (!note.value) {
    alert("Please write down your note.");
  } else if (isEmpty(note.value)) {
    note.value = "";
    alert("Please do not leave the line blank.");
  } else {
    total++;
    totalNotes.textContent = total;

    // we create the list item here
    const li = document.createElement("li");

    // we create check button and set its attributes
    const check = document.createElement("i");
    check.setAttribute("id", "check");
    check.setAttribute("class", "fa fa-check fa-lg");

    // we created the note here
    const par = document.createElement("p");
    par.setAttribute("id", "par");
    par.innerText = note.value;

    // we create the delete button here
    const del = document.createElement("i");
    del.setAttribute("id", "del");
    del.setAttribute("class", "fa fa-trash fa-lg");

    li.appendChild(check);
    li.appendChild(par);
    li.appendChild(del);
    ul.appendChild(li);

    note.value = "";
    note.focus();
  }
  checkButton();
  deleteButton();
});

// delete and complete functions
function checkButton() {
  document.querySelectorAll(".fa-check").forEach((c) => {
    c.onclick = () => {
      if (c.parentElement.classList.contains("checked")) {
        c.parentElement.classList.remove("checked");

        completed = completed - 1;
      } else {
        c.parentElement.classList.add("checked");
        completed++;
        totalCompleted.textContent = completed;
      }
    };
  });
}

function deleteButton() {
  document.querySelectorAll(".fa-trash").forEach((d) => {
    d.onclick = () => {
      d.parentElement.remove();
      total--;
      totalNotes.textContent = total;
      if (d.parentElement.classList.contains("checked")) {
        completed--;
        totalCompleted.textContent = completed;
      }
    };
  });
}

note.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // if we didnt use this code, the page reloads whenever we press enter
    add.click();
    note.value = "";
  }
  if (e.code === "Delete") {
    note.value = "";
  }
});
