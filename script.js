const grid = document.querySelector(".grid");

function createGrid (size) {
    for (let i = 1; i <= size; i++) {
        const createColumn = document.createElement("div");
        createColumn.style.display = "flex";
        createColumn.style.flexDirection = "column";
        createColumn.classList.add("column" + i);
        grid.appendChild(createColumn);
        for (let k = 1; k <= size; k++) {
            const column = document.querySelector(".column" + i);
            const createBox = document.createElement("div");
            createBox.style.height = "100px";
            createBox.style.width = "100px";
            createBox.style.backgroundColor = "white";
            createBox.style.borderColor = "black";
            createBox.style.borderWidth = "1px";
            createBox.style.borderStyle = "solid";
            createBox.classList.add("box");
            column.appendChild(createBox);
            }   
    }
}

createGrid(5);

