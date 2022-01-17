import { useState } from 'react';
import { Global } from '@emotion/react';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
  SwipeableDrawer,
} from '@mui/material';

import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import escape from 'assets/img/escape-301x194px-04A040.svg';

const drawerBleeding = 56;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  value?: any;
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
  const { window, value } = props;
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(80% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Button variant="outlined" onClick={toggleDrawer(true)}>
        詳細を見る
      </Button>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>避難所</Typography>
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
              title={value.避難所_名称}
            />
            <CardContent>
              <Typography variant="body1" color="text.primary">
                {value.避難所_名称}は避難所になります
              </Typography>
              <Typography variant="inherit" color="text.secondary">
                {value.住所}
              </Typography>
            </CardContent>
          </Card>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

export default EvacuationDrawer;
