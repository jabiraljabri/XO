let currentPlayer = 'X';
let cells = Array.from(document.getElementsByClassName('cell'));
let gameActive = true;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function placeMarker(cellIndex) {
  if (gameActive && cells[cellIndex].innerText === '') {
    cells[cellIndex].innerText = currentPlayer;
    cells[cellIndex].classList.add(currentPlayer);
    if (checkWin(currentPlayer)) {
      document.getElementById('turn').innerText = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (checkDraw()) {
      document.getElementById('turn').innerText = 'It\'s a draw!';
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('turn').innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}


function checkWin(player) {
  return winningCombos.some((combo) => {
    return combo.every((index) => cells[index].innerText === player);
  });
}

function checkDraw() {
  return cells.every((cell) => cell.innerText !== '');
}

function resetGame() {
  currentPlayer = 'X';
  cells.forEach((cell) => {
    cell.innerText = '';
  });
  gameActive = true;
  document.getElementById('turn').innerText = `Player ${currentPlayer}'s turn`;
}

document.getElementById('turn').innerText = `Player ${currentPlayer}'s turn`;
