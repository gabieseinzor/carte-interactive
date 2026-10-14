// imports (Leaflet + CSS)
import "./style.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import iconeUrl from "./assets/map-pin.png";

// coordonnées de la ville de ParisChoisir la ville (Paris)

let latitudeVilleParis = 48.8566;
let longitudeVilleParis = 2.3522;

// Affichage de la carte centrée sur la ville
const map = L.map("map").setView([latitudeVilleParis, longitudeVilleParis], 10);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let lieuxInteret = [
  { nom: "Musée du Louvre", latitude: 48.8606, longitude: 2.3376 },
  { nom: "Tour Eiffel", latitude: 48.8584, longitude: 2.2945 },
  { nom: "Aéroport Charles-de-Gaulle", latitude: 49.0097, longitude: 2.5479 },
];

// Affichage des lieux avec marqueur

const iconePerso = L.icon({
  iconUrl: iconeUrl,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

for (let i = 0; i < lieuxInteret.length; i++) {
  const lieu = lieuxInteret[i];
  let marker;
  if (i === 2) {
    marker = L.marker([lieu.latitude, lieu.longitude], {
      icon: iconePerso,
    }).addTo(map);
  } else {
    marker = L.marker([lieu.latitude, lieu.longitude]).addTo(map);
  }
  // afficher pop avec infos au clic
  marker.addTo(map).bindPopup(`🌟<strong><em>${lieu.nom}</em></strong><br>
   Latitude : ${lieu.latitude}<br>
   Longitude : ${lieu.longitude}`);
}
