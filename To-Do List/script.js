"use strict";

const add = document.querySelector(".add");
const todoInput = document.querySelector(".note");
const todoUl = document.getElementById("todo-ul");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
  todoList.forEach((todo) => {
    createTodo(todo);
  });
};

add.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    alert("Please do not leave the line blank!");
    return;
  }
  const newTodo = {
    id: new Date().getTime(),
    completed: false,
    text: todoInput.value,
  };
  createTodo(newTodo);
  todoList.push(newTodo);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  e.target.closest("form").reset();
});

const createTodo = (newTodo) => {
  //! Todo item creation
  //* Object destructring

  const { id, completed, text } = newTodo;

  // create li
  const li = document.createElement("li");
  li.setAttribute("id", id);

  //* add class with completed (status)
  completed ? li.classList.add("checked") : "";

  // create check icon
  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");
  li.append(icon);

  // create item text
  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  // create remove item
  const removeIcon = document.createElement("i");
  removeIcon.setAttribute("class", "fas fa-trash");
  li.append(removeIcon);

  todoUl.append(li);
};

todoUl.addEventListener("click", (e) => {
  const idAttr = e.target.closest("li").getAttribute("id");
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");

    // update the array
    todoList.map((todo) => {
      if (todo.id == idAttr) {
        todo.completed = !todo.completed;
      }
    });
    // add updated array to storage
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else if (e.target.classList.contains("fa-trash")) {
    // remove from UI
    e.target.parentElement.remove();

    // remove from array
    // filter the elements whose id is not deleted and update the list
    todoList = todoList.filter((todo) => todo.id != idAttr);

    // add updated array to localStorage 👇
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
});
