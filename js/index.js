const offLamp = document.querySelector(".img-off");
const onLamp = document.querySelector(".img-on");
const switchCord = document.querySelector(".switch-cord");

const switchLamp = () => {
  if (onLamp.classList.contains("visually-hidden")) {
    onLamp.classList.remove("visually-hidden");
    offLamp.classList.add("visually-hidden");
  } else {
    onLamp.classList.add("visually-hidden");
    offLamp.classList.remove("visually-hidden");
  }
};

switchLamp();

switchCord.addEventListener("click", switchLamp);
