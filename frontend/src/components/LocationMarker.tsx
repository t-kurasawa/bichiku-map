import { useAppSelector } from 'hooks';
import { selectCurrentLocation } from 'stores/openstreetmap-slice';
import { selectEvacuationCenters } from 'stores/evacuation-slice';
import { LatLng } from 'leaflet';
import { Circle, FeatureGroup, Popup } from 'react-leaflet';

// import { Link } from 'react-router-dom'
import { Avatar, Button, Card, CardActions, CardHeader } from '@mui/material';
import DirectionsIcon from '@mui/icons-material/Directions';
import escape from 'assets/images/icons/escape-301x194px-04A040.svg';

export const LocationMarker = () => {
  const fillOptions = { fillColor: '' };
  const currentLocation = useAppSelector(selectCurrentLocation);
  const evacuationCenters = useAppSelector(selectEvacuationCenters);

  const EvacuationCenterCircle = evacuationCenters.map(
    (evacuationCenter, index) => {
      return (
        <Circle
          key={index.toString()}
          pathOptions={{ color: 'orange' }}
          center={new LatLng(evacuationCenter.緯度, evacuationCenter.経度)}
          radius={50}
          eventHandlers={{
            click: () => {
              // console.log('Circle clicked');
            },
          }}
        >
          <Popup closeButton={false}>
            <Card sx={{ maxWidth: 'auto' }}>
              <CardHeader
                avatar={<Avatar src={escape} variant="square" />}
                title={
                  evacuationCenter.避難所_名称 +
                  '（' +
                  evacuationCenter.住所 +
                  '）'
                }
              />
              <CardActions>
                <Button
                  variant="outlined"
                  startIcon={<DirectionsIcon />}
                  href={
                    '/evacuationcenter?ec=' +
                    evacuationCenter.避難所_名称 +
                    '（' +
                    evacuationCenter.住所 +
                    '）'
                  }
                >
                  避難所
                </Button>
              </CardActions>
            </Card>
          </Popup>
        </Circle>
      );
    }
  );

  return currentLocation === null ? null : (
    <FeatureGroup pathOptions={fillOptions}>
      {EvacuationCenterCircle}
    </FeatureGroup>
  );
};

export default LocationMarker;
