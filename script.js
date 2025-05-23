function generateNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);
  const resultDisplay = document.getElementById("result");
  const errorDisplay = document.getElementById("error-message");

  resultDisplay.textContent = "";
  errorDisplay.textContent = "";

  if (min >= max) {
    errorDisplay.textContent = "⚠️ O valor mínimo tem que ser MENOR que o valor máximo.";
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  resultDisplay.textContent = `🎉 Número sorteado: ${result} 🎉`;
  errorDisplay.textContent = "";

  startConfetti();
}

function startConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
}
