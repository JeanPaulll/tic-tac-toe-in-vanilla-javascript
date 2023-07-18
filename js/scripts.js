let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

/**
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
