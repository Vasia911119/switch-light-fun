const offLamp = document.querySelector(".img-off");
const onLamp = document.querySelector(".img-on");
const switchCord = document.querySelector(".switch-cord");

const switchLamp = () => {
  // Перевіряємо, чи лампа увімкнена
  if (onLamp.classList.contains("visually-hidden")) {
    // Якщо лампа вимкнена, вмикаємо її
    onLamp.classList.remove("visually-hidden");
    offLamp.classList.add("visually-hidden");
  } else {
    // Якщо лампа увімкнена, вимикаємо її
    onLamp.classList.add("visually-hidden");
    offLamp.classList.remove("visually-hidden");
  }
};

switchLamp();

switchCord.addEventListener("click", switchLamp);
