export default class Vars {
  constructor(controller) {
    this.controller = controller;
    this.lang = 'en';
    this.units = 'C';
  }

  changeVars(vars) {
    this.lang = vars.lang || this.lang;
    this.units = vars.units || this.units;
    this.controller.model.setLocalStorage({ lang: this.lang, units: this.units });
    this.controller.updateUI({ lang: this.lang, units: this.units });
  }

  getVars() {
    return { lang: this.lang, units: this.units };
  }
}
