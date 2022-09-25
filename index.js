const gameContainer = document.querySelector('#game-container');
const titleContainer = document.querySelector('#title');
const buttonsContainer = document.querySelector('#buttons');
const resetButton = document.createElement('button');


resetButton.innerText = "Reset"
resetButton.classList.add('button');
buttonsContainer.appendChild(resetButton);


titleContainer.innerText = "Etch-A-Sketch";
titleContainer.classList.add('title')


function makeRows(rows, cols) {
    gameContainer.style.setProperty('--grid-rows', rows);
    gameContainer.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        gameContainer.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'pink';
        });
    };
};

makeRows(16, 16);

function numberOfBoxes() {
    let number = prompt("Choose a grid number! (Anything above 100 is will not work)");
    while(number === '' || number === null) {
        number = prompt("Please enter a number!(Max number is 100)");
    }

    reset();
    makeRows(number, number);
}

resetButton.addEventListener('click', () => {
    numberOfBoxes();
});

function reset() {
    let squares = document.querySelectorAll(".grid-item");
    squares.forEach((e) => e.parentNode.removeChild(e));
};



