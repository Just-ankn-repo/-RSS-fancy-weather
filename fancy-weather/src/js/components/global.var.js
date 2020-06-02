export default class Vars {
  constructor(model) {
    this.model = model;
    this.lang = 'en'; /* ru, be */
    this.units = 'metric'; /* imperial */
    this.init();
  }

  init() {
    const storedVars = this.model.getLocalStorage();
    this.lang = storedVars.lang !== null ? storedVars.lang : this.lang;
    this.units = storedVars.units !== null ? storedVars.units : this.units;
    this.model.setLocalStorage({ lang: this.lang, units: this.units });
  }

  changeVars(vars) {
    this.lang = vars.lang || this.lang;
    this.units = vars.units || this.units;
    this.model.setLocalStorage({ lang: this.lang, units: this.units });
    this.model.getWeather(null);
  }

  getVars() {
    return { lang: this.lang, units: this.units };
  }
}
