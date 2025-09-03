function activatePowerUp(type) {
  if (type === "clickFury") {
    let furyInterval = setInterval(() => {
      balls.push(new Ball("basic"));
    }, 100);
    setTimeout(() => clearInterval(furyInterval), 30000);
  }

  if (type === "speedBoost") {
    balls.forEach(ball => ball.dx *= 2);
    setTimeout(() => balls.forEach(ball => ball.dx /= 2), 15000);
  }

  if (type === "damageBoost") {
    Object.keys(ballDamage).forEach(type => ballDamage[type] *= 2);
    setTimeout(() => Object.keys(ballDamage).forEach(type => ballDamage[type] /= 2), 15000);
  }
}