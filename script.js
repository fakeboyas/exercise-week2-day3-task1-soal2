let list = [];

//membuat function push

function addlist() {
    let inputTodo = document.getElementById("add").value;
    list.push(inputTodo);
}
//membuat function edit
function editTodo(index) {
    clear();
    let newText = prompt("Masukan Todo Yang Baru");
    list.splice(index, 1, newText);
    list.forEach(display);
}

// membuat function delete
function deleteList(index) {
    clear();
    list.splice(index, 1);
    list.forEach(display);
}

//membuat fungsi clear biar ngga double
function clear() {
    let displayOff = document.getElementById("display");
    displayOff.innerHTML = null;
}

// membuat fungsi add todo
function display(item, index) {
    let display1 = document.getElementById("display");
    let text = document.createTextNode(item);
    let addText = document.createElement("li");
    addText.appendChild(text);
    addText.classList.add("show2");
    let addButton1 = document.createElement("button");
    let textButton1 = document.createTextNode("Edit");
    let addButton2 = document.createElement("button");
    let textButton2 = document.createTextNode("Delete");

    addButton1.addEventListener("click", function () {
        editTodo(index);
    });

    addButton2.addEventListener("click", function () {
        deleteList(index);
    });

    //  merge button1
    addButton1.appendChild(textButton1);
    //merger button2
    addButton2.appendChild(textButton2);
    //add div untuk styling
    let btnDiv = document.createElement("div");
    btnDiv.appendChild(addButton1);
    btnDiv.appendChild(addButton2);
    btnDiv.classList.add("btn");
    //merge all

    addText.appendChild(btnDiv);
    display1.appendChild(addText);
}

//membuat fungsi menampilkan
function show() {
    clear();
    addlist();
    list.forEach(display);
}
//add click

let addButton = document.getElementById("action1");

addButton.addEventListener("click", show);
