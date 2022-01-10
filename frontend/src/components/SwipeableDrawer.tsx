import { useState } from 'react';
import { Global } from '@emotion/react';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  SwipeableDrawer
} from '@mui/material';

import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import sns from 'assets/img/sns-20x20px-04A040.svg';
// import school from 'assets/img/school-20x20px-04A040.svg';
// import escape from 'assets/img/escape-301x194px-04A040.svg';
import rice from 'assets/img/rice-301x194px-04A040.svg';

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
    theme.palette.mode === 'light'
      ? '#fff'
      : theme.palette.background.default,
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

const SwipeableEdgeDrawer = (props: Props) => {
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
      <Button variant="outlined" onClick={toggleDrawer(true)}>詳細を見る</Button>
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
          <Typography sx={{ p: 2, color: 'text.secondary' }}>
            {value.address || '未登録'}
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >

        <Card sx={{ maxWidth: 'auto'}} >
          <CardHeader
            avatar={<Avatar src={sns} variant="square" />}
            title={value.name || '未登録'}
          />
          <CardMedia
            component="img"
            height="auto"
            width="301"
            image={rice}
            alt="rice"
          />
          <CardContent>
            <Typography variant="body1" color="text.primary">
              災害の備え、ありがとうございます
            </Typography>
            <Typography variant="body2" color="text.secondary">
              この備蓄品は災害時に近隣住民の方と分け合うことができます。
            </Typography>

            <Typography variant="inherit" color="text.secondary">
              備蓄品: {value.name || '未登録'}
            </Typography>
            <Typography variant="inherit" color="text.secondary">
              備蓄数: {value.stockQuantity || '未登録'}
            </Typography>
            <Typography variant="inherit" color="text.secondary">
              賞味期限: {value.expiryDate || '未登録'}
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
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

export default SwipeableEdgeDrawer;
