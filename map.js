'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoibGFwbGFjZXpoYW5nIiwiYSI6ImNreWx5djByODB2dW8ydXVmbzYxZGhtZTEifQ.HgX6Mb3d2-zsKr27FUx8dQ'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/basic-v9',
    center: [-3.5348, 50.7348],
    zoom: 5
});

