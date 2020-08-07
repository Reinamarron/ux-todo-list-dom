let todos = [
    {
        completed: false,
        description: "Take Jim to the hair salon"
    },
    {
        completed: true,
        description: "Drop off wedding invitation at mailbox"
    },
    {
        completed: false,
        description: "Pick up the cake"
    },
    {
        completed: false,
        description: "Call the caterers"
    }
];

function renderTodoApp() {
    let app = document.querySelector("#app")
    let h1 = document.createElement("h1")
    // your code here

    h1.innerText = "Todo List";

    const TodoListElement = document.createElement('ul');

    

    app.appendChild(h1);
    // and maybe some here
    const container = document.createElement("div");
    document.body.append(TodoListElement);
    

    header2.innerText = "Take Jim to the hair salon";
    TodoListElement.classList.add('todo-list');


    app.body.appendChild(header);
    for (let i = 0; i< directory.length; i++){
        const todo = TodoListElement(1)   
    }

renderTodoApp()