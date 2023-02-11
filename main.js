const input = document.getElementById("input");
const btnTodo = document.getElementById("todo-button");
const list = document.getElementById("list");
const alertEl = document.getElementById("alert");
const errorMsg = document.getElementById("error-msg");


const todoList = [];

const createListItem = () => {
    const nowTodo = localStorage.getItem('todos');
    const parsedNowTodo = JSON.parse(nowTodo);
    if (parsedNowTodo && parsedNowTodo.length > 0) {
        parsedNowTodo.forEach((item) => {
            const listItem = document.createElement('button');
            listItem.setAttribute("class", "button-list");
            const listItemDetails = document.createElement('div')
            const listItemTitle = document.createElement('h1');
            listItemTitle.innerText = item.title;
            listItemDetails.appendChild(listItemTitle);

            const listItemAction = document.createElement('div');
            listItemAction.setAttribute("class", "list-item-action");

            const deleteBtn = document.createElement('button');
            deleteBtn.setAttribute("class", "deletebtn");
            deleteBtn.innerHTML = " <i class='fas fa-trash'</i>";

            const editBtn = document.createElement('button');
            editBtn.setAttribute("class", "editbtn");
            editBtn.innerHTML = "<i class='fas fa-edit'></i>";

            const checkBtn = document.createElement('button');
            checkBtn.setAttribute("class", "checkbtn");
            checkBtn.innerHTML = "<i class='fas fa-check'></i>";

            listItemAction.append(deleteBtn, editBtn, checkBtn);

            listItem.append(listItemDetails, listItemAction);
            list.appendChild(listItem);

        })
    }
};


createListItem();


btnTodo.addEventListener('click', (e) => {
    e.preventDefault();
    if (!input.value) {
        errorMsg.style.display = "block";
        errorMsg.innerText = "This feild is required";
        input.style.borderStyle = "solid";
        input.style.borderColor = "red";
        input.style.borderWidth = "1px";
    } else {
        errorMsg.style.display = "none";
        input.style.borderStyle = "none";
        const newTodo = {
            title: input.value
        };

        const nowTodo = localStorage.getItem('todos');
        const parsedNowTodo = JSON.parse(nowTodo);

        if (parsedNowTodo && parsedNowTodo.length > 0) {
            const mergedData = [...parsedNowTodo, newTodo];
            const stringifyTodo = JSON.stringify(mergedData)
            localStorage.setItem('todos', stringifyTodo);
        } else {
            todoList.push(newTodo);
            const stringifyTodo = JSON.stringify(todoList)
            localStorage.setItem('todos', stringifyTodo);
        };

        list.innerHTML = "";
        createListItem();
        input.value = "";
    }
});

