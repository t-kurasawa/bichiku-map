import { useAppDispatch } from 'hooks';
import { fetchEvacuationCenter } from 'stores/evacuation-slice';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import SearchIcon from '@mui/icons-material/Search';

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
    { icon: <SearchIcon />, key: 'EvacuationCenter', name: '避難所' },
  ];

  const handleAction = (key: string) => {
    switch (key) {
      case 'EvacuationCenter': {
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
