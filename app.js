const map = L.map("map").setView([56, 11], 6.5);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Add standard Leaflet markers
educationLocations.forEach(institution => {
    L.marker([institution.lat, institution.lng])
        .bindPopup( //note* bindPopup tilføjer en lille infoboks, <strong> gør skolens navn fed, <br> laver linjeskift og city viser byen
            "<strong>" + institution.school + "</strong><br>" +
            institution.city)
        .addTo(map);
});
