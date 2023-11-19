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

function testFunc() {
  console.log("startClock called!");
}

function changeFaceColor(color, shadow) {
  let clock = shadow.querySelector(".clock");
  clock.style.background = color;
}

function changeHandsColor(color, shadow) {
  console.log("changeHandsColor called!");
  let hour = shadow.querySelector(".hour");
  let minute = shadow.querySelector(".minute");

  hour.style.background = color;
  minute.style.background = color;
}

function submitData(event, shadow) {
  console.log("submitData called!");

  let handsColor = shadow.querySelector("#hands-color-input").value;
  let faceColor = shadow.querySelector("#face-color-input").value;

  let detail = {
    submit: true,
    handsColor: handsColor,
    faceColor: faceColor,
  };

  let saveEvent = new Event("save", {
    // setting composed=true allows it to leave the shadowRoot
    composed: true,
  });
  saveEvent.detail = detail;
  shadow.dispatchEvent(saveEvent);
}

export {
  startClock,
  setClockTime,
  changeFaceColor,
  changeHandsColor,
  submitData,
  testFunc,
};
