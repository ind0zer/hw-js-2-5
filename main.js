const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

let currentIndexKey = 0;

const keyElement = document.getElementById("key");
const gameStatusElement = document.getElementById("game-status");

function updateKey() {
  keyElement.textContent = keys[currentIndexKey];
}

document.addEventListener("keydown", function (event) {
  if (event.key === keys[currentIndexKey]) {
    currentIndexKey++;

    if (currentIndexKey < keys.length) {
      updateKey();
      gameStatusElement.textContent = `Правильно! Натисніть ${keys[currentIndexKey]}`;
    } else {
      gameStatusElement.textContent = `Вітаємо! Ви завершили гру!`;
      PNotify.success({ text: "Вітаємо! Ви завершили гру!" });
    }
  } else {
    PNotify.error({
      text: `Помилка! Ви натиснули неправильну клавішу. Спробуйте ще раз.`,
    });
  }

  updateKey();
});
