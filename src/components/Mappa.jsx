
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


function MapComponent() {
  const position = [44.2398, 9.7275]; // Coordinate di Via Briniati, Brugnato SP

  return (
    <MapContainer center={position} zoom={13} style={{ width: "100%", height: "300px" }}
    className=" z-30">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Via Briniati, 8, 19020 Brugnato SP
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
