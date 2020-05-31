/* global document */
import mapboxgl from 'mapbox-gl';
import '../../css/mapbox-gl.css';
import config from '../../config/env.config';

export default class Map {
  constructor() {
    this.apiToken = config.mapboxToken;
    this.lonElement = document.querySelector('.current__latitude > span');
    this.latElement = document.querySelector('.current__longtitude > span');
  }

  async updateMap(lon, lat) {
    mapboxgl.accessToken = this.apiToken;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lon, lat],
      zoom: 10,
    });

    new mapboxgl.Marker()
      .setLngLat([lon, lat])
      .addTo(map);

    const roundedLon = Math.round(lon * 100) / 100;
    const roundedLat = Math.round(lat * 100) / 100;
    this.lonElement.textContent = `${roundedLon.toString().split('.')[0]}°${roundedLon.toString().split('.')[1]}'`;
    this.latElement.textContent = `${roundedLat.toString().split('.')[0]}°${roundedLat.toString().split('.')[1]}'`;
  }
}
