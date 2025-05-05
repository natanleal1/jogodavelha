const cells = document.querySelectorAll('.cell');
const gameStatus = document.querySelector('#gameStatus'); 
const restart = document.querySelector('#restart');

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let gameOptions = ["", "", "", "", "", "", "", "", ""];
//todas essas 9 áreas são os locais onde o user vai por x ou Y 
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    restart.addEventListener('click', restartGame); 
    gameStatus.textContent = `É a vez do jogador ${currentPlayer}`;
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (gameOptions[cellIndex] !== "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) {
    gameOptions[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    gameStatus.textContent = `É a vez do jogador ${currentPlayer}`;
}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = gameOptions[condition[0]];
        const cellB = gameOptions[condition[1]];
        const cellC = gameOptions[condition[2]];

        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }
        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        document.querySelector('body').style.backgroundColor = 'orange'
        gameStatus.textContent = `${currentPlayer} GANHOU!`;
        running = false;
    } else if (!gameOptions.includes("")) {
        document.querySelector('body').style.backgroundColor = 'blue'
        gameStatus.textContent = "Empatou!";
        running = false;
    } else {
        changePlayer();
    }
}

function restartGame() {
    document.querySelector('body').style.backgroundColor = 'darkcyan'
    currentPlayer = "X";
    gameOptions = ["", "", "", "", "", "", "", "", ""];
    gameStatus.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
