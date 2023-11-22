function createGrid(size = 16) {

    let body = document.querySelector('body');
    body.classList.add('body');

    for (let i=0;i<size;i++) {
        let hw = 960 / size;
        let containerDiv = document.createElement('div');
        containerDiv.style.height = ${hw};
        body.appendChild(containerDiv);
        for (let j=0;j<size;j++) {
            let itemDiv = document.createElement('div');
            itemDiv.setAttribute('style', `flex: 1; border: 1px solid black; height: ${hw}px; width: ${hw}px; margin: 0; padding: 0;`)
            containerDiv.appendChild(itemDiv);
            itemDiv.addEventListener('mouseover', () => {
                itemDiv.setAttribute('style', `flex: 1; border: 1px solid black; height: ${hw}px; width: ${hw}px; margin: 0; padding: 0; background-color: black;`)
            });
        }
    }
}

window.addEventListener('load', (event) => {
    createGrid(32);
});