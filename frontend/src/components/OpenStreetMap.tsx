import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet';

import MapController from './MapController';
import LocationMarker from 'components/LocationMarker';

import 'leaflet/dist/leaflet.css';
import 'assets/css/OpenStreetMap.css';

export const OpenStreetMap = (props: MapContainerProps) => {
  const initialPosition = {
    lat: 35.666452,
    lng: 139.31582,
  };
  return (
    <MapContainer
      center={initialPosition}
      zoom={15}
      scrollWheelZoom={true}
      whenReady={() => {
        console.log('This function will fire once the map is created');
      }}
      whenCreated={(map) => {
        console.log('The underlying leaflet map instance:', map);
        map.locate();
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController />
      <LocationMarker />
    </MapContainer>
  );
};

export default OpenStreetMap;
