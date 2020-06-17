const list = [];

const addButton = document.getElementById("action1");

function addToDo() {
    const inputToDo = document.getElementById("add").value;
    list.push(inputToDo);
}

addButton.addEventListener("click", function () {
    const inputToDo = document.getElementById("add").value;
    list.push(inputToDo);
    list.forEach(function display(a, b) {
        let display1 = document.getElementById("display");
        let item = document.createTextNode(a);

        // merge text

        let addText = document.createElement("li");
        addText.appendChild(item);
        addText.classList.add("show2");
        let addButton1 = document.createElement("button");
        let textButton1 = document.createTextNode("Edit");
        let addButton2 = document.createElement("button");
        let textButton2 = document.createTextNode("Delete");

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

// addButton.addEventListener("click", function () {
//     const inputToDo = document.getElementById("add").value;
//     list.push(inputToDo);
//     for (i = 0; i < list.length; i++) {
//         let display1 = document.getElementById("display");
//         let item = document.createTextNode(list[i]);
//         let addText = document.createElement("span");
//         let addButton1 = document.createElement("button");
//         let textButton1 = document.createTextNode("Edit");
//         let addButton2 = document.createElement("button");
//         let textButton2 = document.createTextNode("Delete");

//         // merge text
//         addText.appendChild(item);
//         //merge button1
//         addButton1.appendChild(textButton1);
//         //merger button2
//         addButton2.appendChild(textButton2);
//         //merge all
//         display1.appendChild(addText);
//         display1.appendChild(addButton1);
//         display1.appendChild(addButton2);
//     }
// });
