export default class Clock {
  constructor(clockElement) {
    this.clockElement = clockElement;
    this.clock = undefined;
    this.timezone = undefined;
  }

  updateTime(timezone) {
    this.timezone = timezone;
    if (this.clock) clearInterval(this.clock);
    this.clock = setInterval(this.updateClockOnUI, 1000);
  }

  updateClockOnUI() {
    const date = new Date(new Date().toLocaleString('en-US', { timeZone: this.timezone }));
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    this.clockElement.innerText = `${hours}:${minutes}:${seconds}`;
  }
}
