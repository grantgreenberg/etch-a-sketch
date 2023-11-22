function createGrid(size = 16) {

    let body = document.querySelector('body');
    body.setAttribute('style', 'max-width: 960px; margin: auto;');

    for (let i=0;i<size;i++) {
        let hw = 960 / size;
        let containerDiv = document.createElement('div');
        containerDiv.setAttribute('style', `display: flex; margin: 0; padding: 0; height: ${hw}px;`);
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