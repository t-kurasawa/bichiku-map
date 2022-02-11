import { useAppSelector } from 'hooks';
import { selectCurrentLocation } from 'stores/openstreetmap-slice';
import {
  selectEvacuationAreas,
  selectEvacuationCenters,
} from 'stores/evacuation-slice';

import { LatLng } from 'leaflet';
import { Circle, FeatureGroup, FeatureGroupProps, Popup } from 'react-leaflet';

import EvacuationCenterDrawer from 'components/EvacuationCenterDrawer';
import EvacuationAreaDrawer from 'components/EvacuationAreaDrawer';

export const LocationMarker = (props: FeatureGroupProps) => {
  const fillBlueOptions = { fillColor: '' };

  const currentLocation = useAppSelector(selectCurrentLocation);
  const evacuationAreas = useAppSelector(selectEvacuationAreas);
  const evacuationCenters = useAppSelector(selectEvacuationCenters);

  const EvacuationAreaCircle = evacuationAreas.map((evacuationArea, index) => {
    return (
      <Circle
        key={index.toString()}
        pathOptions={{ color: 'red' }}
        center={new LatLng(evacuationArea.緯度, evacuationArea.経度)}
        radius={50}
        eventHandlers={{
          click: () => {
            console.log('Circle clicked');
          },
        }}
      >
        <Popup>
          <EvacuationAreaDrawer value={evacuationArea} isOpen={true} />
        </Popup>
      </Circle>
    );
  });

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
              console.log('Circle clicked');
            },
          }}
        >
          <Popup>
            <EvacuationCenterDrawer value={evacuationCenter} isOpen={true} />
          </Popup>
        </Circle>
      );
    }
  );

  return currentLocation === null ? null : (
    <FeatureGroup pathOptions={fillBlueOptions}>
      {EvacuationAreaCircle}
      {EvacuationCenterCircle}
    </FeatureGroup>
  );
};

export default LocationMarker;
