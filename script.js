const grid = document.querySelector(".grid");

function createGrid (size) {
    for (let i = 1; i <= size; i++) {
        const createColumn = document.createElement("div");
        createColumn.style.display = "flex";
        createColumn.style.flexDirection = "column";
        createColumn.style.flex = "1";
        createColumn.classList.add("column" + i);
        grid.appendChild(createColumn);
        for (let k = 1; k <= size; k++) {
            const column = document.querySelector(".column" + i);
            const createBox = document.createElement("div");
            createBox.style.flex = "1";
            createBox.style.backgroundColor = "white";
            createBox.style.borderColor = "black";
            createBox.style.borderWidth = "1px";
            createBox.style.borderStyle = "solid";
            createBox.classList.add("box");
            column.appendChild(createBox);
            }   
    }
}

function changeColor () {
    const box = document.querySelectorAll(".box");
    box.forEach(
        e => e.addEventListener("mousedown", () => {
            if (e.style.backgroundColor === "white") {
            e.style.backgroundColor = "black";
            } else {
                e.style.backgroundColor = "white";
            }
        })
    );
}

createGrid(5);
changeColor();

