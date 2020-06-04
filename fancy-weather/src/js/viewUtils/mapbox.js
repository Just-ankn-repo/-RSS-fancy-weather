import '../../css/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import config from '../../config/env.config';
import constants from './constants';

export default class Mapbox {
  constructor() {
    this.lonElement = constants.latitudeElement;
    this.latElement = constants.longitudeElement;
    this.mapboxgl = mapboxgl;
    this.mapboxgl.accessToken = config.mapboxToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [0, 0],
      zoom: 8,
    });
    this.marker = new mapboxgl.Marker().setLngLat([0, 0]).addTo(this.map);
  }

  async updateMap(lon, lat) {
    this.map.jumpTo({ center: [lon, lat], zoom: 8 });
    this.marker.setLngLat([lon, lat]);
    const roundedLon = Math.round(lon * 100) / 100;
    const roundedLat = Math.round(lat * 100) / 100;
    this.lonElement.textContent = `${roundedLon.toString().split('.')[0]}°${roundedLon.toString().split('.')[1]}'`;
    this.latElement.textContent = `${roundedLat.toString().split('.')[0]}°${roundedLat.toString().split('.')[1]}'`;
  }
}
