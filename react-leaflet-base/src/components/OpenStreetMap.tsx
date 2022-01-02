import { useAppSelector } from 'hooks';
import { selectPosition } from 'stores/openstreetmap-slice';
import { MapContainer, MapContainerProps,Pane,TileLayer } from 'react-leaflet';
import LocationMarker from 'components/LocationMarker';
import BasicSpeedDial from 'components/SpeedDial';

import 'leaflet/dist/leaflet.css';
import 'assets/css/OpenStreetMap.css';


export const OpenStreetMap = (props: MapContainerProps) => {
  const position = useAppSelector(selectPosition);

  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={true} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Pane name="custom" style={{ zIndex: 1050 }}>
        <BasicSpeedDial />
      </Pane>
      <LocationMarker />
    </MapContainer>
  );
};

export default OpenStreetMap;
