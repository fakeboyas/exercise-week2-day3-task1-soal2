const list = [];

const addButton = document.getElementById("action1");

// function addToDo() {
//     const inputToDo = document.getElementById("add").value;
//     list.push(inputToDo);
// }

addButton.addEventListener("click", function show() {
    let displayOff = document.getElementById("display");
    displayOff.innerHTML = null;
    const inputToDo = document.getElementById("add").value;
    list.push(inputToDo);
    list.forEach(function display(item, index) {
        let display1 = document.getElementById("display");
        let text = document.createTextNode(item);

        // merge text

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
    });
});

//alternatif
// addButton.addEventListener("click", function () {
//     const inputToDo = document.getElementById("add").value;
//     list.push(inputToDo);
//     for (i = 0; i < list.length; i++) {
//         var display1 = document.getElementById("display");
//         var text = document.createTextNode(list[i]);
//         var addText = document.createElement("li");
//         var addButton1 = document.createElement("button");
//         var textButton1 = document.createTextNode("Edit");
//         var addButton2 = document.createElement("button");
//         var textButton2 = document.createTextNode("Delete");
//         var btndiv = document.createElement("div");
//         // merge text
//     }

//     addText.appendChild(text);
//     addText.classList.add("show2");
//     //merge button1
//     addButton1.appendChild(textButton1);
//     //merger button2
//     addButton2.appendChild(textButton2);
//     //merge all
//     display1.appendChild(addText);
//     btndiv.appendChild(addButton1);
//     btndiv.appendChild(addButton2);
//     addText.appendChild(btndiv);
//     display1.classList.add("show1");
// });

// membuat edit
function editTodo(index) {
    let newText = prompt("Masukan Todo Yang Baru");
    list.splice(index, 1, newText);
    show;
}
