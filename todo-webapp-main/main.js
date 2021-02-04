//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);

/*function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
}*/