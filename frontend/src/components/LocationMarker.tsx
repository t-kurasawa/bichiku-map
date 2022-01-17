import { useAppSelector } from 'hooks';
import { selectCurrentLocation } from 'stores/openstreetmap-slice';
import { selectStockpileList } from 'stores/stockpile-slice';
import {
  selectOpendata,
  selectEvacuationAreas,
  selectEvacuationCenters,
} from 'stores/opendata-slice';

import { LatLng } from 'leaflet';
import { Circle, FeatureGroup, FeatureGroupProps, Popup } from 'react-leaflet';

import StockpileDrawer from 'components/StockpileDrawer';
import EvacuationCenterDrawer from 'components/EvacuationCenterDrawer';
import EvacuationAreaDrawer from 'components/EvacuationAreaDrawer';

export const LocationMarker = (props: FeatureGroupProps) => {
  const fillBlueOptions = { fillColor: 'blue' };

  const currentLocation = useAppSelector(selectCurrentLocation);
  const evacuationAreas = useAppSelector(selectEvacuationAreas);
  const evacuationCenters = useAppSelector(selectEvacuationCenters);
  const stockpileList = useAppSelector(selectStockpileList);
  const opendata = useAppSelector(selectOpendata);

  const OpendataCircle = opendata.features.map((feature, index) =>
    feature.geometry.type === 'Polygon' ? (
      <Circle
        key={index.toString()}
        pathOptions={{ color: 'red' }}
        center={
          new LatLng(
            feature.geometry.coordinates?.[0]?.[0]?.[1],
            feature.geometry.coordinates?.[0]?.[0]?.[0]
          )
        }
        radius={25}
      >
        <Popup>
          {feature.properties.genshoname} {feature.properties.kubun}
        </Popup>
      </Circle>
    ) : null
  );

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

  const StockpileCircle = stockpileList.map((stockpile, index) => {
    return (
      <Circle
        key={index.toString()}
        pathOptions={{ color: 'green' }}
        center={new LatLng(stockpile.lat, stockpile.lng)}
        radius={50}
        eventHandlers={{
          click: () => {
            console.log('Circle clicked');
          },
        }}
      >
        <Popup>
          <StockpileDrawer value={stockpile} isOpen={true} />
        </Popup>
      </Circle>
    );
  });

  return currentLocation === null ? null : (
    <FeatureGroup pathOptions={fillBlueOptions}>
      {StockpileCircle}
      {OpendataCircle}
      {EvacuationAreaCircle}
      {EvacuationCenterCircle}
    </FeatureGroup>
  );
};

export default LocationMarker;
