✊ Rock Paper Scissors:

A clean, responsive Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript.

🔗 **[Live Demo](https://mansityagi548.github.io/Rock-Paper-Scissors-/)**

📸 Preview 


![Game preview](Game%20preview.png)

🎮 How to Play : 

Click any of the three tokens — Rock, Paper, or Scissors

The computer instantly picks its move at random

The result is shown with both choices side by side

Hit Play Again to go another round

✨ Features :

🏆 Score tracking — Wins, Losses, and Draws are tracked live

💾 Persistent scores — Scores are saved in localStorage so they survive page reloads

📱 Fully responsive — Works on both desktop and mobile

📖 Rules modal — Tap the Rules button anytime to see how the game works

⚡ No dependencies — Pure vanilla JS, no frameworks or libraries

🛠️ How It Works : 

Game Logic:

When a token is clicked, the game uses event delegation on the game board — a single click listener catches all three buttons and reads the data-id attribute to know which choice was made. The computer's move is generated fresh each round using Math.random().
Winner is determined by a straightforward set of conditions:

->Paper beats Rock

->Rock beats Scissors

->Scissors  beats Paper

Score Persistence : 

Scores are stored in localStorage as individual keys (win, loss, draw). On every score update they're written immediately — so even an accidental refresh won't lose progress.

Results Screen :

After each round, the game board is hidden and a results screen is dynamically injected into the DOM showing both choices and the outcome. Clicking Play Again removes the results screen and brings the game board back.

📁 Project Structure:

├── index.html

├── style.css

├── script.js

🚀 Getting Started : 

Just open index.html in your browser — no build step, no installs needed.

git clone https://github.com/your-username/rock-paper-scissors.git

cd rock-paper-scissors

open index.html

🧠 Built With : 

HTML5

CSS3 (custom properties, grid, flexbox, media queries)

Vanilla JavaScript (ES6+, localStorage, DOM manipulation)
