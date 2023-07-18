let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;
/**
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @description Página Incial Jogo da Velha
 * @date 18/06/2023
 * @description
 * Contador de Jogadas
 */
let player1 = 0;
let player2 = 0;

/**
 * @description
 * Adicionando o evendo de click aos boxes
 */
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function (e) {
    el = checkEl(player1, player2);
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);
      if (player1 == player2) player1++;
      else player2++;
    }
    verifyScoreboard();
  });
}
console.log("buttons", buttons);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    console.log("teste", this);
  });
}

/**
 * @description
 * Definir o próximo jogador
 */
function checkEl(player1, player2) {
  if (player1 == player2) el = x;
  else el = o;
  return el;
}

/**
 * @description
 * Declara o vencedor e atualiza o placar
 */
function declareWinner(winner) {
  let scoreBoardX = document.querySelector("#scoreboard-1");
  let scoreBoardO = document.querySelector("#scoreboard-2");
  let message = "";
  if (winner == "x") {
    scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
    message = "O Jogador 1 venceu!";
  } else if (winner == "o") {
    scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
    message = "O Jogador 2 venceu!";
  } else {
    message = "Deu velha!";
  }
  messageText.innerHTML = message;
  messageText.classList.remove("hide");
  messageContainer.classList.remove("hide");
  setTimeout(() => {
    messageContainer.classList.add("hide");
  }, 4000);
  cleanBoard();
}

function cleanBoard() {
  player1 = 0;
  player2 = 0;
  let boxToRemove = document.querySelectorAll(".box div");
  for (let i = 0; i < boxToRemove.length; i++) {
    boxToRemove[i].parentNode.removeChild(boxToRemove[i]);
  }
}

function verifyScoreboard() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  let b1Child = b1.childNodes.length ? b1.childNodes[0].className : null;
  let b2Child = b2.childNodes.length ? b2.childNodes[0].className : null;
  let b3Child = b3.childNodes.length ? b3.childNodes[0].className : null;
  let b4Child = b4.childNodes.length ? b4.childNodes[0].className : null;
  let b5Child = b5.childNodes.length ? b5.childNodes[0].className : null;
  let b6Child = b6.childNodes.length ? b6.childNodes[0].className : null;
  let b7Child = b7.childNodes.length ? b7.childNodes[0].className : null;
  let b8Child = b8.childNodes.length ? b8.childNodes[0].className : null;
  let b9Child = b9.childNodes.length ? b9.childNodes[0].className : null;

  let horizontalValidation1 =
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0;
  let horizontalValidation2 =
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0;
  let horizontalValidation3 =
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0;

  let verticalValidation1 =
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0;
  let verticalValidation2 =
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0;
  let verticalValidation3 =
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0;

  let diagonalValidation1 =
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0;
  let diagonalValidation2 =
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0;

  if (horizontalValidation1) {
    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      declareWinner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      declareWinner("o");
    }
  }

  if (horizontalValidation2) {
    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      declareWinner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      declareWinner("o");
    }
  }

  if (horizontalValidation3) {
    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      declareWinner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      declareWinner("o");
    }
  }

  if (verticalValidation1) {
    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      declareWinner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      declareWinner("o");
    }
  }

  if (verticalValidation2) {
    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      declareWinner("x");
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      declareWinner("o");
    }
  }

  if (verticalValidation3) {
    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      declareWinner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      declareWinner("o");
    }
  }

  if (diagonalValidation1) {
    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      declareWinner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      declareWinner("o");
    }
  }

  if (diagonalValidation2) {
    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      declareWinner("x");
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      declareWinner("o");
    }
  }

  let counter = 0;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }
  if (counter == 9) {
    declareWinner("velha");
  }
}
