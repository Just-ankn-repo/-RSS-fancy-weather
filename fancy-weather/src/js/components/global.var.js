export default class Vars {
  constructor(controller) {
    this.controller = controller;
    this.lang = 'en';
    this.units = 'C';
    this.init();
  }

  init() {
    const storedVars = this.controller.model.getLocalStorage();
    this.lang = storedVars.lang !== null ? storedVars.lang : this.lang;
    this.units = storedVars.units !== null ? storedVars.units : this.units;
    this.controller.model.setLocalStorage({ lang: this.lang, units: this.units });
  }

  changeVars(vars) {
    this.lang = vars.lang || this.lang;
    this.units = vars.units || this.units;
    this.controller.model.setLocalStorage({ lang: this.lang, units: this.units });
    this.controller.updateUI();
  }

  getVars() {
    return { lang: this.lang, units: this.units };
  }
}
