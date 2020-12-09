//EXECUTA AO CARREGAR O DOCUMENTO, CHAMANDO UMA FUNÇÃO
document.addEventListener("DOMContentLoaded", () => {
  //PEGA TODOS OS QUADRADOS DO DOCUMENTO
  let squares = document.querySelectorAll(".square");
  //ADICIONA A CADA QUADRADO, UMA FUNÇÃO DE CLIQUE
  squares.forEach((quadrado) => {
    quadrado.addEventListener("click", handleClick);
  });
  let resetarButton = document.getElementById("reset");
  resetarButton.addEventListener("click", resetar);
});

function handleClick(evento) {
  let position = evento.target.id; //pega o ID do objeto clicado (square)
  if (handleMove(position)) {
    let gameOverMessage = document.getElementById("gameOverMessage");
    let vencedor =
      playerTime == 1
        ? '<i class="far fa-times-circle"></i>'
        : '<i class="far fa-circle"></i>';
    gameOverMessage.innerHTML = `<p>O jogo acabou! <strong>${vencedor}</strong> venceu.</p>`;
  } else if (!gameOver && counterPlay == 9) {
    gameOverMessage.innerHTML = `<p>O jogo acabou! <strong>Empate.</strong></p>`;
  }
  console.log("board = " + board);
  updateSquare(position);
}

function updateSquare(position) {
  console.log("position = " + position);
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<i class="far ${symbol}"></i>`;
  //<i class="far fa-circle"></i>
  //<i class="far fa-times-circle"></i>
}

function resetar() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((quadrado) => {
    quadrado.innerHTML = "";
  });
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 1;
  symbols = ["fa-circle", "fa-times-circle"];
  gameOver = false;
  counterPlay = 0;
  gameOverMessage.innerHTML = "";
  console.log(counterPlay);
}
