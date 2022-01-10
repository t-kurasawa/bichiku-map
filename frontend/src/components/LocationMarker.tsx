import { useAppSelector } from 'hooks';
import {
  selectMapElements,
  selectCurrentLocation,
} from 'stores/openstreetmap-slice';
import { selectStockpileList } from 'stores/stockpile-slice';
import { selectOpendata } from 'stores/opendata-slice';

import { LatLng } from 'leaflet';
import { FeatureGroup, Popup, Circle, FeatureGroupProps } from 'react-leaflet';

import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@mui/material';

import ShareIcon from '@mui/icons-material/Share';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import SwipeableEdgeDrawer from 'components/SwipeableDrawer';

import sns from 'assets/img/sns-20x20px-04A040.svg';
import school from 'assets/img/school-20x20px-04A040.svg';
import escape from 'assets/img/escape-301x194px-04A040.svg';
// import rice from 'assets/img/rice-301x194px-04A040.svg';

export const LocationMarker = (props: FeatureGroupProps) => {
  const fillBlueOptions = { fillColor: 'blue' };

  const currentLocation = useAppSelector(selectCurrentLocation);
  const mapElements = useAppSelector(selectMapElements);
  const stockpileList = useAppSelector(selectStockpileList);
  const opendata = useAppSelector(selectOpendata);

  const OpendataCircle = opendata.features.map((feature) =>
    feature.geometry.type === 'Polygon' ? (
      <Circle
        key={feature.properties.gid}
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

  const SchoolCircle = mapElements.map((mapElement) =>
    mapElement.type === 'node' ? (
      <Circle
        key={mapElement.id}
        pathOptions={{ color: 'orange' }}
        center={new LatLng(mapElement.lat, mapElement.lon)}
        radius={50}
      >
        <Popup>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={<Avatar src={school} variant="square" />}
              title={mapElement.tags.name || '未登録'}
            />
            <CardMedia
              component="img"
              height="194"
              image={escape}
              alt="School"
            />
            <CardContent>
              <Typography variant="body1" color="text.primary">
                学校は避難場所になります。
              </Typography>
              <Typography variant="body2" color="text.secondary">
                避難場所には備蓄品があります。助けが必要な方は避難場所に来て下さい。
              </Typography>
              <Typography variant="inherit" color="text.secondary">
                ※正確な情報は各自治体の情報をご覧ください。
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteForeverIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Popup>
      </Circle>
    ) : null
  );

  const StockpileCircle = stockpileList.map((stockpile) => (
    <Circle
      key={stockpile.id}
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
            <SwipeableEdgeDrawer value={stockpile} />
          </CardContent>
        </Card>
      </Popup>
    </Circle>
  ));

  return currentLocation === null ? null : (
    <FeatureGroup pathOptions={fillBlueOptions}>
      {SchoolCircle}
      {StockpileCircle}
      {OpendataCircle}
    </FeatureGroup>
  );
};

export default LocationMarker;
