var inc = 1000;

function setClockTime() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  let shadow = this.shadowRoot;

  shadow.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
  shadow.querySelector(".minute").style.transform = `rotate(${minute}deg)`;
  shadow.querySelector(".second").style.transform = `rotate(${second}deg)`;
}

function startClock() {
  console.log("startClock called!");
  setInterval(() => this.setClockTime(), inc);
}

export { startClock, setClockTime };
