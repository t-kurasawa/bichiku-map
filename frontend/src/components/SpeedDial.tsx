import { useAppDispatch } from 'hooks';
import {
  fetchEvacuationArea,
  fetchEvacuationCenter,
} from 'stores/evacuation-slice';
import { fetchStockpile } from 'stores/stockpile-slice';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ParkIcon from '@mui/icons-material/Park';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import NavigationIcon from '@mui/icons-material/Navigation';

export const UpSpeedDial = (props: any) => {
  const dispatch = useAppDispatch();

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
    { icon: <HealthAndSafetyIcon />, key: 'EvacuationCenter', name: '避難所' },
    { icon: <ParkIcon />, key: 'EvacuationArea', name: '避難場所' },
  ];

  const handleAction = (key: string) => {
    switch (key) {
      case 'Navigation': {
        console.log(key);
        break;
      }
      case 'Volunteer':
        console.log(key);
        dispatch(fetchStockpile());
        break;
      case 'EvacuationArea': {
        console.log(key);
        dispatch(fetchEvacuationArea());
        break;
      }
      case 'EvacuationCenter': {
        console.log(key);
        dispatch(fetchEvacuationCenter());
        break;
      }
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
