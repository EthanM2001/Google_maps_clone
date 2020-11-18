mapboxgl.accessToken =
  "pk.eyJ1IjoiZXRoYW5tMjAwMSIsImEiOiJja2huZ2Y3cDAwa3M3MzNta3lndWM3OGN1In0.0rwJQZEZ7q_qUk8_mDSFGg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
}

function errorLocation() {
  console.log("error found");
}

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
});
