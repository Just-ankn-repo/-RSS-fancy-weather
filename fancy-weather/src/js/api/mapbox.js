import mapboxgl from 'mapbox-gl';
import '../../css/mapbox-gl.css';
import config from '../../config/env.config';

export default class Map {
  constructor() {
    this.apiToken = config.mapboxToken;
  }

  async updateMap(lon, lat) {
    mapboxgl.accessToken = this.apiToken;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lon, lat],
      zoom: 10,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([lon, lat])
      .addTo(map);
  }
}
