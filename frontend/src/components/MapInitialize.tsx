import { useAppDispatch } from 'hooks';
import {
  setCurrentLocation,
  setMapCenterPosition,
} from 'stores/openstreetmap-slice';
import { useMapEvents } from 'react-leaflet';

export const MapInitialize = (props: any) => {
  const dispatch = useAppDispatch();
  useMapEvents({
    locationfound(e) {
      // console.log(e)
      dispatch(setCurrentLocation({ lat: e.latlng.lat, lng: e.latlng.lng }));
    },
    moveend(e) {
      // console.log(e)
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

export default MapInitialize;
