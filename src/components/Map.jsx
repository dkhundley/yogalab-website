import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Map({ 
  latitude = 33.7490, // Default to Phoenix, AZ - replace with actual Yoga Lab coordinates
  longitude = -112.0740,
  markerTitle = "Yoga Lab",
  markerDescription = "Visit us at Yoga Lab"
}) {
  useEffect(() => {
    // Apply grayscale filter to map tiles
    const style = document.createElement('style');
    style.innerHTML = `
      .leaflet-tile-container img {
        filter: grayscale(100%);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            <div className="text-center font-montserrat">
              <strong className="text-gray-900">{markerTitle}</strong>
              <p className="text-sm text-gray-600 mt-1">{markerDescription}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
