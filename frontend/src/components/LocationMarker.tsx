import { useAppSelector } from 'hooks';
import { selectCurrentLocation } from 'stores/openstreetmap-slice';
import { selectStockpileList } from 'stores/stockpile-slice';
import { selectOpendata, selectEvacuationAreas, selectEvacuationCenters} from 'stores/opendata-slice';

import { LatLng } from 'leaflet';
import { FeatureGroup, Popup, Circle, FeatureGroupProps } from 'react-leaflet';

import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material';

import StockpileDrawer from 'components/StockpileDrawer';
import EvacuationCenterDrawer from 'components/EvacuationCenterDrawer'
import EvacuationAreaDrawer from 'components/EvacuationAreaDrawer'

import sns from 'assets/img/sns-20x20px-04A040.svg';
import escape from 'assets/img/escape-301x194px-04A040.svg';

export const LocationMarker = (props: FeatureGroupProps) => {
  const fillBlueOptions = { fillColor: 'blue' };

  const currentLocation = useAppSelector(selectCurrentLocation);
  const evacuationAreas = useAppSelector(selectEvacuationAreas);
  const evacuationCenters = useAppSelector(selectEvacuationCenters);
  const stockpileList = useAppSelector(selectStockpileList);
  const opendata = useAppSelector(selectOpendata);

  const OpendataCircle = opendata.features.map((feature,index) =>
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

  const EvacuationAreaCircle = evacuationAreas.map((evacuationArea, index) => (
    <Circle
      key={index.toString()}
      pathOptions={{ color: 'red' }}
      center={new LatLng(evacuationArea.緯度, evacuationArea.経度)}
      radius={50}
    >
      <Popup>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar src={escape} variant="square" />}
            title={evacuationArea.避難場所_名称}
          />
          <CardContent>
            <EvacuationAreaDrawer value={evacuationArea} />
          </CardContent>
        </Card>
      </Popup>
    </Circle>
  ));


  const EvacuationCenterCircle = evacuationCenters.map((evacuationCenter, index) => (
    <Circle
      key={index.toString()}
      pathOptions={{ color: 'orange' }}
      center={new LatLng(evacuationCenter.緯度, evacuationCenter.経度)}
      radius={50}
    >
      <Popup>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar src={escape} variant="square" />}
            title={evacuationCenter.避難所_名称}
          />
          <CardContent>
            <EvacuationCenterDrawer value={evacuationCenter} />
          </CardContent>
        </Card>
      </Popup>
    </Circle>
  ));



  const StockpileCircle = stockpileList.map((stockpile,index) => (
    <Circle
      key={index.toString()}
      pathOptions={{ color: 'green' }}
      center={new LatLng(stockpile.lat, stockpile.lng)}
      radius={50}
    >
      <Popup>
        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            avatar={<Avatar src={sns} variant="square" />}
            title={stockpile.name || '未登録'}
          />
          <CardContent>
            <StockpileDrawer value={stockpile} />
          </CardContent>
        </Card>
      </Popup>
    </Circle>
  ));

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
