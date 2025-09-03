const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let gold = 0;
let prestigeMultiplier = 1;
let balls = [];
let bricks = [];

const rows = 5;
const cols = 10;
const brickWidth = 75;
const brickHeight = 30;

function drawUI() {
  document.getElementById("gold").textContent = Math.floor(gold);
}

function buyBall(type) {
  const cost = 10 + balls.length * 5;
  if (gold >= cost) {
    gold -= cost;
    balls.push(new Ball(type));
  }
}

function upgradeDamage() {
  if (gold >= 100) {
    gold -= 100;
    Object.keys(ballDamage).forEach(type => ballDamage[type] += 1);
  }
}

function prestige() {
  if (gold >= 1000) {
    prestigeMultiplier += 1;
    gold = 0;
    balls = [];
    createBricks();
    alert("Prestige activated! Multiplier: x" + prestigeMultiplier);
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bricks.forEach(brick => brick.draw());
  balls.forEach(ball => {
    ball.update();
    ball.draw();
  });
  drawUI();
  saveGame();
  requestAnimationFrame(gameLoop);
}

createBricks();
loadGame();
setInterval(() => {
  gold += 1 * prestigeMultiplier;
}, 1000);

gameLoop();