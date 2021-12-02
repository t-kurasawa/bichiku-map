import { useAppSelector, useAppDispatch } from '../hooks';
import { selectElements, selectPosition, searchAsync,locationfound } from '../stores/openstreetmap-slice';
import { selectStockPiles, stockpileSearchAsync } from '../stores/stockpile-slice';
import { searchOpendataAsync, selectOpendata } from '../stores/opendata-slice';

import Leaflet, { LatLng } from "leaflet";
import { useMapEvents, FeatureGroup, Popup, Circle,Marker , Tooltip, FeatureGroupProps } from "react-leaflet";

import { Avatar, Card, CardHeader, CardMedia, CardContent, CardActions,IconButton, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";


export const LocationMarker = (props: FeatureGroupProps) => {

    const DefaultIcon = Leaflet.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
      });
    Leaflet.Marker.prototype.options.icon = DefaultIcon;

    const fillBlueOptions = { fillColor: 'blue' }

    const elements = useAppSelector(selectElements);
    const position = useAppSelector(selectPosition);
    const stockpiles = useAppSelector(selectStockPiles);
    const opendata = useAppSelector(selectOpendata);
    const dispatch = useAppDispatch();

    const opendataCircle = opendata.features.map(feature=>(
        (feature.geometry.type === 'Polygon' 
        ?
        <Circle key={feature.properties.gid} pathOptions={{ color: 'red' }} center={new LatLng(feature.geometry.coordinates?.[0]?.[0]?.[1] ,feature.geometry.coordinates?.[0]?.[0]?.[0])} radius={25}>
            <Popup>
                {feature.properties.genshoname} {feature.properties.kubun} 
            </Popup>
        </Circle>
        : null
        )

    ))

  
    const BusstopsCircle = elements.map(element=>(
        (element.type === 'node'
        ? (
        <Circle key={element.id} pathOptions={{ color: 'orange' }} center={new LatLng(element.lat,element.lon)} radius={50} >
            <Popup>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/PrefSymbol-Tokyo.svg/160px-PrefSymbol-Tokyo.svg.png"/>}
                        title={element.tags.name || '未登録'}
                        subheader="2021-12-04"
                    />                    
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://business-textbooks.com/btextbooks/wp-content/uploads/2020/10/3854adc57415272a6dbdaf4017e4d6b4-11.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.primary">
                            学校は避難場所に指定されています。
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            避難場所には備蓄品があります。助けが必要な方は避難場所に来て下さい。
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
        ) 
        : null
        )
    ))


    const StockpilesCircle = stockpiles.map(stockpile=>(
        <Circle key={stockpile.id} pathOptions={{ color: 'green' }} center={new LatLng(stockpile.lat,stockpile.lng)} radius={50} >
            <Popup>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={<Avatar src={stockpile.user.picture.thumbnail} />}
                        title={stockpile.name || '未登録'}
                        subheader={'備蓄数: '+ stockpile.stockQuantity}
                    />                    
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://mui.com/static/images/cards/paella.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.primary">
                            災害の備え、ありがとうございます。
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            この備蓄品は災害時に近隣住民の方と分け合い助け合うために活用されます。
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {stockpile.name}（備蓄数: {stockpile.stockQuantity}）
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            賞味期限： {stockpile.expiryDate}
                        </Typography>

                    </CardContent>
                    <CardActions disableSpacing={true}>
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
    ))


    const map = useMapEvents({
        load() {
            const latlng = map.getCenter()
            const location = new LatLng(latlng.lat, latlng.lng)
            const condition = {
                query: 'amenity=school',
                location: location
            }
            dispatch(searchAsync(condition))
            dispatch(stockpileSearchAsync({address:''}))
        },
        click() {
            console.log(map.getCenter())
            const latlng = map.getCenter()
            dispatch(locationfound(new LatLng(latlng.lat, latlng.lng)))
            const location = new LatLng(latlng.lat, latlng.lng)
            const condition = {
                query: 'amenity=school',
                location: location
            }
            dispatch(searchAsync(condition))
            dispatch(searchOpendataAsync({path: 'tokyo_dosekiryu_tokubetsu'}))
        }
    })

    return position === null ? null : (
        <FeatureGroup pathOptions={fillBlueOptions}>
            <Marker position={position} >
                <Tooltip direction="auto" permanent>
                    周辺の情報を表示するには地図を移動してクリックして下さい。
                </Tooltip>
            </Marker>
            {BusstopsCircle}
            {StockpilesCircle}
            {opendataCircle}
        </FeatureGroup>
    )
  }
  
export default LocationMarker;
