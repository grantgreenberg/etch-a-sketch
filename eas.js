function createGrid(size = 16) {

    let body = document.querySelector('body');
    removeAllChildNodes(body);
    body.classList.add('body');

    let setGridSizeButton = document.createElement('button');
    setGridSizeButton.textContent = 'Set Grid Size';
    setGridSizeButton.addEventListener('click', () => {
        updateGrid();
    });

    body.appendChild(setGridSizeButton);

    for (let i=0;i<size;i++) {
        let hw = 960 / size;
        let containerDiv = document.createElement('div');
        containerDiv.classList.add('containerDiv');
        containerDiv.style.height = `${hw}px`;
        body.appendChild(containerDiv);
        for (let j=0;j<size;j++) {
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('itemDiv');
            itemDiv.style.height = `${hw}px`;
            itemDiv.style.width = `${hw}px`;
            containerDiv.appendChild(itemDiv);
            itemDiv.addEventListener('mouseover', () => {
                updateBackgroundColor(itemDiv);
            });
        }
    }
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function updateBackgroundColor(itemDiv) {
    itemDiv.style.backgroundColor = 'gray';
};

function updateGrid() {

    let size = prompt("Please enter your desired grid size: ");
    
    while (size > 100 || size < 1) {
        alert('Grid size should be between 1 and 100, inclusive.')
        size = prompt("Please enter your desired grid size: ");
    }

    createGrid(size);
}

window.addEventListener('load', (event) => {
    createGrid();
});