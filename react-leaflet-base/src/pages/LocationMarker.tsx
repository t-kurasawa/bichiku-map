import { useAppSelector, useAppDispatch } from '../hooks';
import { selectElements, selectPosition, searchAsync, locationfound } from '../stores/openstreetmap-slice';
import { selectStockPiles, stockpileSearchAsync } from '../stores/stockpile-slice';

import { LatLng, LocationEvent } from "leaflet";
import { useMapEvents, FeatureGroup, Popup, Circle, Tooltip, FeatureGroupProps } from "react-leaflet";

import { Avatar, Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';

export const LocationMarker = (props: FeatureGroupProps) => {
    const fillBlueOptions = { fillColor: 'blue' }

    const elements = useAppSelector(selectElements);
    const position = useAppSelector(selectPosition);
    const stockpiles = useAppSelector(selectStockPiles);
    const dispatch = useAppDispatch();
  
    const BusstopsCircle = elements.map(element=>(
        (element.type === 'node'
        ? (
        <Circle key={element.id} center={new LatLng(element.lat,element.lon)} radius={15} >
            <Popup>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={<Avatar src="https://randomuser.me/api/portraits/thumb/men/75.jpg"/>}
                        title={element.tags.name || '未登録'}
                        subheader="September 14, 2016"
                    />                    
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://mui.com/static/images/cards/paella.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        </Typography>
                    </CardContent>
                </Card>
            </Popup>
        </Circle>
        ) 
        : null
        )
    ))


    const StockpilesCircle = stockpiles.map(stockpile=>(
        <Circle key={stockpile.id} center={new LatLng(stockpile.lat,stockpile.lng)} radius={150} >
            <Popup>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={<Avatar src="https://randomuser.me/api/portraits/thumb/men/75.jpg"/>}
                        title={stockpile.name || '未登録'}
                        subheader={stockpile.expiryDate}
                    />                    
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://mui.com/static/images/cards/paella.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        </Typography>
                    </CardContent>
                </Card>
            </Popup>
        </Circle>
    ))



    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e:LocationEvent) {
            map.flyTo(e.latlng, map.getZoom())
            dispatch(locationfound(new LatLng(e.latlng.lat, e.latlng.lng)))

            const location = new LatLng(e.latlng.lat, e.latlng.lng)
            const condition = {
                query: 'bus_stop',
                location: location
            }
            dispatch(searchAsync(condition))
            dispatch(stockpileSearchAsync({params:''}))
        }
    })

    return position === null ? null : (
        <FeatureGroup pathOptions={fillBlueOptions}>
            <Circle center={position} radius={50} >
                <Tooltip direction="auto" permanent>
                    現在地
                </Tooltip>
            </Circle>
            {BusstopsCircle}
            {StockpilesCircle}
        </FeatureGroup>
    )
  }
  
export default LocationMarker;
