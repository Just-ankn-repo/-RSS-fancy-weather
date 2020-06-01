/* global navigator window */

import apis from '../api/index';
import utils from '../utils/index';
import Vars from './global.var';

export default class Model {
  constructor(controller) {
    this.controller = controller;
    this.localStorage = window.localStorage;
    this.vars = new Vars(this);
    this.weather = new apis.Weather(this.vars);
    this.geocodingByCity = new apis.GeocodingByCity(this.vars);
    this.cityByIP = new apis.CityByIP();
    this.unsplash = new apis.Unsplash();
  }

  async getWeatherByCity(query) {
    const geoData = await this.geocodingByCity.getCoordinates(query);
    const weather = await this.weather.getWeather(geoData.location.lat, geoData.location.lng);
    let weatherData = utils.combineWeatherData(geoData, weather);
    const vars = this.vars.getVars();
    const date = utils.getDate(vars.lang, weatherData.timezone);
    weatherData = Object.assign(weatherData, vars, date);
    const imageQuery = `${weatherData.season} ${weatherData.currentWeather.weather}`;
    weatherData.backgroundImage = await this.unsplash.searchImage(imageQuery);
    return weatherData;
  }

  async getWeatherByGeolocation(lat, lon) {
    const city = await this.geocodingByCity.getCity(`${lat} ${lon}`);
    const weatherData = await this.getWeatherByCity(city);
    return weatherData;
  }

  async getWeatherByIP() {
    const city = await this.cityByIP.getCity();
    const weatherData = await this.getWeatherByCity(city);
    return weatherData;
  }

  async getWeather(city) {
    if (city) {
      const weatherData = await this.getWeatherByCity(city);
      this.controller.updateUI(weatherData);
    } else {
      const success = async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const weatherData = await this.getWeatherByGeolocation(lat, lon);
        this.controller.updateUI(weatherData);
      };

      const error = async () => {
        const weatherData = await this.getWeatherByIP();
        this.controller.updateUI(weatherData);
      };

      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  getLocalStorage() {
    const resLang = this.localStorage.getItem('lang');
    const resUnits = this.localStorage.getItem('units');
    return { lang: resLang, units: resUnits };
  }

  setLocalStorage(vars) {
    if (vars.lang) this.localStorage.setItem('lang', vars.lang);
    if (vars.units) this.localStorage.setItem('units', vars.units);
  }
}
