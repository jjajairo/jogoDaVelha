//INICIAR AS VARIAVÉIS
let board = ["", "", "", "", "", "", "", "", ""]; //marca as 9 casas to tabuleiro
let playerTime = 1; //define se é a vez do BOLA (0) ou X(1)
let symbols = ["fa-circle", "fa-times-circle"]; //0 para BOLA e 1 para X
let gameOver = false;
let counterPlay = 0;
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
//FUNÇÃO DEFINE SE É A VEZ DO X OU O
function handleMove(position) {
  if (gameOver) {
    return;
  }
  if (board[position] == "") {
    board[position] = symbols[playerTime];
    gameOver = isWin();
    if (!gameOver) {
      playerTime = playerTime == 0 ? 1 : 0;
      counterPlay++;
    }
  }
  return gameOver;
}
//VERIFICA SE ALGUÉM VENCEU O JOGO
function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    }
  }
  return false;
}
