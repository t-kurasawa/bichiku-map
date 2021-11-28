import { useAppSelector } from '../hooks';
import { selectPosition } from '../stores/openstreetmap-slice';
import { MapContainer, MapContainerProps, TileLayer,useMap } from "react-leaflet";
import LocationMarker from './LocationMarker';
import "leaflet/dist/leaflet.css";
import "../assets/css/OpenStreetMap.css"


export const OpenStreetMap = (props: MapContainerProps) => {
  const position = useAppSelector(selectPosition);

  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
    </MapContainer>
  );
}

export default OpenStreetMap;
