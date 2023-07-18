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
