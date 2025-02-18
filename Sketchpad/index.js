const container = document.querySelector(".container");
let size = 0;

getGridSize = () => {
    size = prompt("How many squares per side?")

    if (!size || size <= 0 || size > 100) {
        alert("Please enter a valid input")
        getGridSize()
    } else {
        return size
    }
}


clearGrid = () => {
    const squares = document.querySelectorAll(".container div");
    squares.forEach((div) => {
        div.style.background = "rgb(158, 136, 141)";
    });
};


createGrid = (size) => {
    for (let i = 1; i <= size ** 2; i++) {

        const square = document.createElement("div")
        square.style.border = "1px solid lightgray";
        square.style.width = 1000 / size + "px";
        square.style.height = 600 / size + "px";
        square.style.boxSizing = "border-box";
        container.appendChild(square)


        square.addEventListener("mousedown", () => {
            square.style.background = "rgb(66, 57, 59)";
        });

        // Cambiar color al pasar el mouse con el botón pulsado
        square.addEventListener("mouseover", (event) => {
            if (event.buttons === 1) {
                square.style.background = "rgb(66, 57, 59)";
            }
        });

    }
}

createGridBtn = document.querySelector(".createGrid")

createGridBtn.addEventListener("click", () => {

    container.innerHTML = "";
    getGridSize()
    createGrid(size)
})

clearGridBtn = document.querySelector(".eraseGrid")

clearGridBtn.addEventListener("click", () => {
    clearGrid()
})

