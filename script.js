const rulesBtn = document.querySelector(".rules-btn");
const rulesBooklet = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const gameBtn = document.querySelector(".game-board");
const winNum = document.querySelector("#win");
const lossNum = document.querySelector("#loss");
const drawNum = document.querySelector("#draw");
const mainGrid = document.querySelector(".main-one");

const game = ["rock", "paper", "scissors"]; // this is for computer choice 
let computerChoice;
let gameStatement;
let win = parseInt(localStorage.getItem("win")) || 0;
let loss = parseInt(localStorage.getItem("loss")) || 0;
let draw = parseInt(localStorage.getItem("draw")) || 0;
winNum.textContent = win;
lossNum.textContent = loss;
drawNum.textContent = draw;

rulesBtn.addEventListener("click", () => {
  rulesBooklet.classList.add("show");
});



closeBtn.addEventListener("click", () => {
  if (rulesBooklet.classList.contains("show")) {
    rulesBooklet.classList.remove("show");
  }
});



gameBtn.addEventListener("click", (e) => {
  const tokenBtn = e.target.closest(".token-btn");
  if (!tokenBtn) return;

  const choiceBtn = tokenBtn.dataset.id;
  playGame(choiceBtn);
  renderHtml(choiceBtn);
});



function playGame(choice) {
  let number = Math.floor(Math.random() * 3);
  let compMove = game[number];
  computerChoice = compMove;
  if (choice === compMove) {
    updateScore("draw");
    gameStatement = "IT'S A DRAW"
  } else if (choice === "paper") {
    if (compMove === "rock") {
      updateScore("win");
       gameStatement = "YOU WON"
    } else {
      updateScore("loss");
       gameStatement = "YOU LOSE"
    }
  } else if (choice === "rock") {
    if (compMove === "scissors") {
      updateScore("win");
       gameStatement = "YOU WIN"
    } else {
      updateScore("loss");
       gameStatement = "YOU LOSE"
    }
  } else {
    if (compMove === "paper") {
      updateScore("win");
       gameStatement = "YOU WIN"
    } else {
      updateScore("loss");
       gameStatement = "YOU LOSE"
    }
  }
}



function updateScore(type) {
  if (type === "win") {
    win++;
    localStorage.setItem("win", win);
    winNum.textContent = win;
  } else if (type === "loss") {
    loss++;
    localStorage.setItem("loss", loss);
    lossNum.textContent = loss;
  } else if (type === "draw") {
    draw++;
    localStorage.setItem("draw", draw);
    drawNum.textContent = draw;
  }
}





function renderHtml(playerChoice) {
  gameBtn.classList.add("hidden");
  const overlay = document.createElement("div");

  overlay.innerHTML = ` <div class="results-board hidden">
        <div class="result-column">
            <p class="choice-label">You Picked</p>
            <div class="token-display scissors">
                <div class="icon-wrapper">
                    <img src="assests/icon-${playerChoice}.svg" alt="Scissors">
                </div>
            </div>
        </div>

        <div class="outcome-container">
            <h1 class="outcome-text" id="result-text">${gameStatement}</h1>
            <button class="play-again-btn" id="play-again-btn">Play Again</button>
        </div>

        <div class="result-column">
            <p class="choice-label">The House Picked</p>
            <div class="token-display rock">
                <div class="icon-wrapper">
                    <img src="assests/icon-${computerChoice}.svg" alt="Rock">
                </div>
            </div>
        </div>

    </div>
   `;

  mainGrid.appendChild(overlay);
  const resultGrid = mainGrid.querySelector(".results-board");
  resultGrid.classList.remove("hidden");

  resultGrid.addEventListener("click", (e) => {
    if (e.target.closest(".play-again-btn")) {
      gameBtn.classList.remove("hidden");
      resultGrid.classList.add("hidden");
      mainGrid.removeChild(overlay);
    }
  });
}
