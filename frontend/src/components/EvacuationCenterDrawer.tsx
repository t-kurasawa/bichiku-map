import { useState } from 'react';
import { Global } from '@emotion/react';

import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  SwipeableDrawer,
} from '@mui/material';

import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import { StockpileStatusEC } from 'components/StockpileStatusEC';

import escape from 'assets/images/icons/escape-301x194px-04A040.svg';

const drawerBleeding = 56;

interface Props {
  value?: any;
  open: boolean;
}

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const EvacuationDrawer = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Root>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(85% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Avatar src={escape} variant="square" />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {
          setOpen(true);
        }}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -32,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }} />
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Card sx={{ maxWidth: 'auto' }}>
            <CardHeader
              avatar={<Avatar src={escape} variant="square" />}
              title={props.value.避難所_名称 + '（' + props.value.住所 + '）'}
            />
            <CardContent>
              <StockpileStatusEC ec={props.value} />
            </CardContent>
          </Card>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

export default EvacuationDrawer;
