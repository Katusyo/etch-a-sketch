const gridContainer = document.getElementById("grid-container");
const newGridBtn = document.getElementById("newGridBtn");
const gridSize = 16;
const totalCells = gridSize * gridSize;

function createGrid(squaresPerSide) {
    gridContainer.innerHTML = '';

    const containerSize = gridContainer.clientWidth;
    const itemSize = containerSize / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.style.width = `${itemSize}px`;
        item.style.height = `${itemSize}px`;
        gridContainer.appendChild(item);
    }
}

newGridBtn.addEventListener('click', () => {
    let newSize = prompt("Enter the number of squares per side for the new grid:");
    newSize = parseInt(newSize);

    if (!isNaN(newSize) && newSize > 0) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid positive number.");
    }
});

for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    gridContainer.appendChild(cell);
}