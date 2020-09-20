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
    let app = document.getElementById("app")
    let h1 = document.createElement("h1")
    // your code here

    h1.innerText = "Todo List";

    const TodoListElement = document.createElement('ul');

    app.appendChild(h1);
    // and maybe some here
    const container = document.createElement("div");

    //header2.innerText = "Take Jim to the hair salon";
    TodoListElement.classList.add('todo-list');

    for (let i = 0; i< todos.length; i++){
        const liitem = document.createElement("li")
        const checkbox = document.createElement("input") 
        const cblabel = document.createElement("label")
        checkbox.type = "checkbox"
        checkbox.name = "todo" + i
        cblabel.for = "todo" + i
        cblabel.innerText=todos[i]["description"]

        liitem.appendChild(checkbox)
        liitem.appendChild(cblabel)
        TodoListElement.appendChild(liitem)
     console.log(todos[i]["description"])    
    }
    container.appendChild(h1)
    container.appendChild(TodoListElement)
    app.appendChild(container)
}
renderTodoApp()