class Ball {
  constructor(type) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.dx = (Math.random() - 0.5) * 4;
    this.dy = (Math.random() - 0.5) * 4;
    this.type = type;
    this.damage = ballDamage[type];
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

    bricks.forEach(brick => {
      if (
        this.x > brick.x &&
        this.x < brick.x + brickWidth &&
        this.y > brick.y &&
        this.y < brick.y + brickHeight
      ) {
        brick.health -= this.damage * prestigeMultiplier;
        if (brick.health <= 0) {
          gold += brick.reward * prestigeMultiplier;
          brick.reset();
        }

        if (this.type === "scatter") {
          balls.push(new Ball("basic"));
        }
      }
    });
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = ballColors[this.type];
    ctx.fill();
    ctx.closePath();
  }
}

const ballColors = {
  basic: "#0f0",
  sniper: "#00f",
  scatter: "#f0f",
};

const ballDamage = {
  basic: 1,
  sniper: 5,
  scatter: 0.5,
};