function saveGame() {
  const saveData = {
    gold,
    prestigeMultiplier,
    ballDamage,
  };
  localStorage.setItem("idleBreakoutSave", JSON.stringify(saveData));
}

function loadGame() {
  const saveData = JSON.parse(localStorage.getItem("idleBreakoutSave"));
  if (saveData) {
    gold = saveData.gold;
    prestigeMultiplier = saveData.prestigeMultiplier;
    Object.assign(ballDamage, saveData.ballDamage);
  }
}