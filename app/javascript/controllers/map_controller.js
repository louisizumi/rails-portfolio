import { Controller } from "@hotwired/stimulus"
import mapboxgl from 'mapbox-gl';

const APIKEY = `pk.eyJ1IjoibG91aXN6dW1pIiwiYSI6ImNrczh1a2IzZDBrMWoyd3BmOWE3bDczajQifQ.ntXLQHZhuzlLgVWudXDnEA`;

export default class extends Controller {
  connect() {
    const getMap = (address) => {
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${APIKEY}`)
        .then(response => response.json())
        .then((data) => {
          const long = data.features[0].geometry.coordinates[1];
          const lat = data.features[0].geometry.coordinates[0];
          mapboxgl.accessToken = APIKEY;
          const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/louiszumi/ckw5lomvs1qs814o58uh0os4t',
            center: [0.7302, 52.3963],
            zoom: 5
          });
          const el = document.createElement('div');
          el.innerText="泉";
          el.className="marker";
          new mapboxgl.Marker(el)
            .setLngLat([lat, long])
            .addTo(map);
        });
    };

    getMap('E29JH');
  }
}

