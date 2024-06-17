document.addEventListener("DOMContentLoaded", () => {
    // Fetch the map token and coordinates from the embedded script tag
    const mapToken = document.getElementById('map-token').textContent.trim();
    const coordinates = JSON.parse(document.getElementById('map-coordinates').textContent.trim());

    // Set the Mapbox access token
    mapboxgl.accessToken = mapToken;

    // Initialize the Mapbox map
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // map style
        center: coordinates, // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    // Create a default Marker and add it to the map
    const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(coordinates)
        .setPopup(new mapboxgl.Popup({offset:12 }).setHTML("<p>book for exact location</p>")) 
        .addTo(map);
});
