function createGrid(size = 16) {
    const body = document.querySelector('body');
    removeAllChildNodes(body);

    const setGridSizeButton = document.createElement('button');
    setGridSizeButton.textContent = 'Set Grid Size';
    setGridSizeButton.addEventListener('click', updateGrid);

    body.appendChild(setGridSizeButton);

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('grid-container');
    body.appendChild(containerDiv);

    const containerSize = 960;
    const cellSize = containerSize / size;

    for (let i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('grid-row');
        rowDiv.style.height = `${cellSize}px`;
        containerDiv.appendChild(rowDiv);

        for (let j = 0; j < size; j++) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('grid-item');
            itemDiv.style.width = `${cellSize}px`;
            itemDiv.style.height = `${cellSize}px`;
            rowDiv.appendChild(itemDiv);

            itemDiv.addEventListener('mouseover', () => {
                updateBackgroundColor(itemDiv);
            });
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function updateBackgroundColor(itemDiv) {
    itemDiv.style.backgroundColor = 'gray';
}

function updateGrid() {
    let size = prompt('Please enter your desired grid size: ');

    while (size > 100 || size < 1) {
        alert('Grid size should be between 1 and 100, inclusive.');
        size = prompt('Please enter your desired grid size: ');
    }

    createGrid(size);
}

window.addEventListener('load', () => {
    createGrid();
});