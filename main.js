const input = document.getElementById("input");
const btnTodo = document.getElementById("todo-button");
const list = document.getElementById("list");
const alertEl = document.getElementById("alert");
const errorMsg = document.getElementById("error-msg");


const todoList = [];

const createListItem = () => {
    todoList.forEach((item) => {
        let listItem = document.createElement('li');
        let listItemTitle = document.createElement('h2');
        listItemTitle.innerText = item.title;
        listItem.appendChild(listItemTitle);
        list.appendChild(listItem);
    })
};

createListItem();

btnTodo.addEventListener('click', (e) => {
    e.preventDefault();
    if(input.value === "") {
        errorMsg.style.display="block";
        errorMsg.innerText="This feild is required";
        input.style.borderStyle="solid";
        input.style.borderColor="red";
        input.style.borderWidth="1px";
    }
    // if (input.value === "") {
    //     alertEl.style.top = "8.5rem"
    //     alertEl.children[0].innerText = "This feild is required";
    //     setTimeout(() => {
    //         alertEl.style.top = "-100%";
    //     }, 3000);
    // } 
    else {
        errorMsg.style.display="none";
        input.style.borderStyle="none";
        const newTodo = {
            title: input.value
        };
        todoList.push(newTodo);
        list.innerHTML = "";
        createListItem();
        input.value = "";
    }
});

const errorFunc = () => {
    alertEl.style.top = "-100%"
}

alertEl.children[1].addEventListener('click', errorFunc);