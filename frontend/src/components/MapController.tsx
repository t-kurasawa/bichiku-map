import { useAppDispatch } from 'hooks';

import {
  setCurrentLocation,
  setMapCenterPosition,
} from 'stores/openstreetmap-slice';
import { useMapEvents } from 'react-leaflet';

export const MapController = (props: any) => {
  const dispatch = useAppDispatch();

  const map = useMapEvents({
    locationfound(e) {
      dispatch(setCurrentLocation({ lat: e.latlng.lat, lng: e.latlng.lng }));
      map.flyTo(e.latlng, map.getZoom());
    },
    moveend(e) {
      dispatch(
        setMapCenterPosition({
          lat: e.target._lastCenter.lat,
          lng: e.target._lastCenter.lng,
        })
      );
    },
  });

  return <></>;
};

export default MapController;
