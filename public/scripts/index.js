
let map;
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 2
  });

  marker = new google.maps.Marker({
    position: {lat: 0, lng: 0},
    map: map
  });

  fetch('/api/latest-gps-data')
    .then(response => response.json())
    .then(data => {
      const { latitude, longitude } = data;
      const latLng = new google.maps.LatLng(latitude, longitude);

      map.setCenter(latLng);
      marker.setPosition(latLng);
    });

  setInterval(updateMarker, 5000);
}

function updateMarker() {
  fetch('/api/latest-gps-data')
    .then(response => response.json())
    .then(data => {
      const { latitude, longitude } = data;
      const latLng = new google.maps.LatLng(latitude, longitude);

      map.setCenter(latLng);
      marker.setPosition(latLng);
    });
}

window.onload = initMap;
