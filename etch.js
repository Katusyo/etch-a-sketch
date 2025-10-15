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

        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = getRandomColor();
        });
        
        gridContainer.appendChild(item);
    }
}


function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.body.style.backGroundColor = getRandomColor();

newGridBtn.addEventListener('click', () => {
    let newSize = prompt("Enter the number of squares per side for the new grid (max 100):");
    newSize = parseInt(newSize);

    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});