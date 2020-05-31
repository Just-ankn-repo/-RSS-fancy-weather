/* global navigator window */

import apis from '../api/index';
import utils from '../utils/index';

export default class Model {
  constructor(controller) {
    this.controller = controller;
    this.weather = new apis.Weather(controller);
    this.geocodingByCity = new apis.GeocodingByCity(controller);
    this.cityByIP = new apis.CityByIP();
    this.localStorage = window.localStorage;
  }

  async getWeatherByCity(query) {
    const geoData = await this.geocodingByCity.getCoordinates(query);
    const weather = await this.weather.getWeather(geoData.location.lat, geoData.location.lng);
    const weatherData = utils.combineWeatherData(geoData, weather);
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
