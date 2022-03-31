mapboxgl.accessToken = 'pk.eyJ1IjoiYXJheDFlIiwiYSI6ImNsMG9hdHBxeTFvZ2ozb2w0ZG5uODFjbnMifQ.-XILCojgN2C-0Pr4JAyKtA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    //center: [-71.104081, 42.365554],
    center: [ -87.680286, 41.896026],
    zoom: 12
});

let currentmarkers = [];

async function run(){
    //get bus data
    const updatedbus = await getBusLocations();

    if (currentmarkers!==null) {
        for (var a = currentmarkers.length - 1; a >= 0; a--) {
          currentmarkers[a].remove();
        }
    }

    for(let i = 0; i < updatedbus.length; i++) {
         
        var marker = new mapboxgl.Marker()
        .setLngLat([updatedbus[i]['lon'], updatedbus[i]['lat']])
        .addTo(map);

        currentmarkers.push(marker);
    }

    //timer
    setTimeout(run, 1000);
}

//request bus data from CTA
let bustimes = [];
async function getBusLocations(){
    const proxyURL = 'https://can-cors.herokuapp.com/';
    const url = 'http://www.ctabustracker.com/bustime/api/v2/getvehicles?key=QfGiqb9Geaiw4NgaVVFtha2S7&rt=66&format=json';
    const response = await fetch(proxyURL + url);
    const json     = await response.json();
    bustimes = json['bustime-response']['vehicle'];
    return bustimes;
}

run();
