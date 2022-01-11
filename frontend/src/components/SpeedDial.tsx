import { useAppSelector, useAppDispatch } from 'hooks';
import {
  fetchOpenStreetMap,
  selectMapCenterPosition,
} from 'stores/openstreetmap-slice';
import { fetchOpendata, fetchEvacuationArea } from 'stores/opendata-slice';
import { fetchStockpile } from 'stores/stockpile-slice';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WarningIcon from '@mui/icons-material/Warning';
import NavigationIcon from '@mui/icons-material/Navigation';

export const UpSpeedDial = (props: any) => {
  const dispatch = useAppDispatch();
  const mapCenterPosition = useAppSelector(selectMapCenterPosition);

  const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  }));

  const actions = [
    { icon: <NavigationIcon />, key: 'Navigation', name: '現在地周辺を探す' },
    { icon: <VolunteerActivismIcon />, key: 'Volunteer', name: '分け合う備蓄' },
    { icon: <HealthAndSafetyIcon />, key: 'HealthAndSafety', name: '避難所' },
    { icon: <LocalDrinkIcon />, key: 'LocalDrink', name: '給水拠点施設' },
    { icon: <WarningIcon />, key: 'Warning', name: 'ハザードマップ' },
  ];

  const handleAction = (key: string) => {
    switch (key) {
      case 'Navigation': {
        console.log(key);
        break;
      }
      case 'Volunteer':
        console.log(key);
        dispatch(fetchStockpile({ address: '' }));
        break;
      case 'HealthAndSafety': {
        console.log(key);
        dispatch(fetchEvacuationArea());
        break;
      }
      case 'LocalDrink': {
        console.log(key);
        const condition = {
          query: 'amenity=school',
          location: {
            lat: mapCenterPosition.lat,
            lng: mapCenterPosition.lng,
          },
        };
        dispatch(fetchOpenStreetMap(condition));
        break;
      }
      case 'Warning':
        console.log(key);
        dispatch(fetchOpendata({ path: 'tokyo_dosekiryu_tokubetsu' }));
        break;
      default:
        console.error('something wrong');
        break;
    }
    return undefined;
  };

  return (
    <Box
      sx={{
        height: 'auto',
        transform: 'translateZ(0px)',
        flexGrow: 1,
        zIndex: 1050,
      }}
    >
      <StyledSpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        direction={'up'}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={true}
            onClick={() => handleAction(action.key)}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
};

export default { UpSpeedDial };
