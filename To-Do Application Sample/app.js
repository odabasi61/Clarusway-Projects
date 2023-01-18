//! Elements

const todoInput = document.getElementById("todo-input"); //? works faster than querySelector

const addBtn = document.querySelector("#todo-button");

const todoUl = document.querySelector("#todo-ul");

//? data is kept as "string" in local storage
//? we should parse it to array with "JSON.parse()"

//* Global Array for todo obj 👇
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//* load event vs. DomContentLoaded ?
//? The "load" event and the "DOMContentLoaded" event are two different events in JavaScript that are triggered at different times when a web page is loading.

//? The "load" event is triggered when all elements on a page have finished loading, including images, stylesheets, and scripts.

//? The "DOMContentLoaded" event is triggered when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

//! So, the DOMContentLoaded event fires "earlier" than the load event and can be used if you want to perform some actions as soon as the DOM is ready, without waiting for other resources to finish loading.

//? If there is data in local storage, it will pull the data when the page is refreshed. 👇

window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
  //! get TodoList from localStorage and load to UI
  todoList.forEach((todo) => {
    createTodo(todo);
  });
};

//* form => submit event vs button => click event

// form.addEventListener("submit", () => {})

addBtn.addEventListener("click", (e) => {
  //! The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. 👇
  //* prevent form submit 👇
  e.preventDefault();
  //! The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string 👇
  if (todoInput.value.trim() === "") {
    alert("Please, enter new todo text!");
    //? It is better to use "return" without setting the else structure. 👇
    return;
  }
  // alert("Continue");

  const newTodo = {
    //* A new and unique id will be created for each click event. 👇
    id: new Date().getTime(), //! 👈 unique ID with milliseconds of now.
    completed: false, //! 👈 STATUS
    text: todoInput.value, //! 👈 USER INPUT
  };

  createTodo(newTodo);

  //* UPDATE TODO ARRAY 👇
  todoList.push(newTodo);

  //? localStorage vs sessionStorage vs Cookies ?
  //! localStorage, sessionStorage, and cookies are all ways to store data in a web browser, but they have different characteristics and use cases.

  //! localStorage and sessionStorage are JavaScript APIs for storing key-value pairs in the browser, with localStorage having no expiration date and being available on all tabs and windows from the same origin, even after the browser is closed and reopened, and sessionStorage only being available for one session and lost when the browser window or tab is closed.

  //! Cookies are small text files that are stored on the user's computer by the browser, and are sent back to the server with each request. Cookies have a specific expiry time, and can be used for authentication and tracking user behavior.

  //! Cookies are typically used for authentication, tracking user preferences and session management whereas localStorage and sessionStorage are used for storing data on the browser side, usually for performance optimization.

  //* localStorage todoList Update 👇 (setItem takes key&value pair)

  localStorage.setItem("todoList", JSON.stringify(todoList));

  //? 👆 The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified. 👆

  //? event.target vs event.currentTarget ?
  //! "event.target" and "event.currentTarget" are properties of the Event object in JavaScript that can be used to determine which element an event occurred on.

  //! "event.target" refers to the element on which the event occurred, also known as the "original target" of the event. For example, if you have an event listener on a parent element and you click on a child element, event.target would refer to the child element that was clicked on.

  //! "event.currentTarget", on the other hand, refers to the element on which the event listener is currently attached. In the example above, if you have an event listener on the parent element, "event.currentTarget" would refer to the parent element, regardless of which child element was actually clicked on.

  //! In summary, event.target refers to the element on which the event happened and event.currentTarget refers to the element to which the event listener is attached.

  e.target.closest("form").reset();
});

const createTodo = (newTodo) => {
  //! Todo item creation
  //* Object destructring ---> with ES6

  //? Structures brought to javascript with ES6 ?
  /*
    1. Classes
    2. Arrow Functions
    3. let ve const
    4. Destructuring
    5. Promises
    6. Modules
    7. Spread ve Rest Operators
    8. Default Parameters
    9. Iterators
    10. Generators
    11. Map, Set ve WeakMap
    12. Template Strings
    13. Symbols
    */

  const { id, completed, text } = newTodo;

  //* create li
  const li = document.createElement("li");
  li.setAttribute("id", id);

  //* add class with completed (status)
  completed ? li.classList.add("checked") : "";

  //* create check icon
  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");
  li.append(icon);

  //? append vs. appendChild ?
  //! "Append" adds an element as the last child of the selected element. "AppendChild" adds an element as the last child of the selected element and returns the appended element.

  //* create item text

  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  //* create remove button

  const removeIcon = document.createElement("i");
  removeIcon.setAttribute("class", "fas fa-trash");
  li.append(removeIcon);

  console.log(li);

  // * append li to ul

  //? prepend vs append ?
  //! The prepend() method inserts specified content at the beginning of the selected elements. Tip: To insert content at the end of the selected elements, use the append() method.
  todoUl.append(li);
};

//? Capturing vs. Bubbling ?
//! With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. With capturing, the event is first captured by the outermost element and propagated to the inner elements.

//* STATIC CLOSEST PARENT ELEMENT => CHILD
todoUl.addEventListener("click", (e) => {
  const idAttr = e.target.closest("li").getAttribute("id");
  if (e.target.classList.contains("fa-check")) {
    // alert("Check clicked")
    //* update UI 👇
    e.target.parentElement.classList.toggle("checked");

    //* update Array 👇
    todoList.map((todo) => {
      if (todo.id == idAttr) {
        todo.completed = !todo.completed;
      }
    });

    //* add updated array to localStorage 👇
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else if (e.target.classList.contains("fa-trash")) {
    // alert("Remove clicked")
    //* remove from UI 👇
    e.target.parentElement.remove();

    //* remove from Array 👇
    //* Filter the elements whose id is not deleted and update the list 👇
    todoList = todoList.filter((todo) => todo.id != idAttr);

    //* add updated array to localStorage 👇
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    alert("Other element clicked");
  }
  console.log(todoList);
});
