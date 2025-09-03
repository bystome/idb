class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.maxHealth = 20 + Math.floor(Math.random() * 30);
    this.health = this.maxHealth;
    this.reward = 5;
  }

  draw() {
    ctx.fillStyle = `rgb(${255 - this.health * 5}, ${this.health * 5}, 0)`;
    ctx.fillRect(this.x, this.y, brickWidth, brickHeight);
    ctx.fillStyle = "#fff";
    ctx.font = "12px Arial";
    ctx.fillText(Math.floor(this.health), this.x + brickWidth / 2 - 10, this.y + brickHeight / 2 + 5);
  }

  reset() {
    this.maxHealth += 10;
    this.health = this.maxHealth;
  }
}

function createBricks() {
  bricks = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      bricks.push(new Brick(c * (brickWidth + 5) + 35, r * (brickHeight + 5) + 30));
    }
  }
}