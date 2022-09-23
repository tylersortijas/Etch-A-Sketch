const container = document.querySelector('#container');


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'pink';
        });
    };
};

makeRows(16, 16);



