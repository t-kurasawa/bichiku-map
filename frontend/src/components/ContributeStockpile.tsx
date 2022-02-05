import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PrintIcon from '@mui/icons-material/Print';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import Title from './Title';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  fetchStockpileType,
  selectStockpileTypes,
} from 'stores/stockpile-slice';
import {
  fetchEvacuationCenter,
  selectEvacuationCenters,
} from 'stores/evacuation-slice';

import escape from 'assets/images/icons/escape-301x194px-04A040.svg';

const ContributeStockpile = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchStockpileType());
    dispatch(fetchEvacuationCenter());
  }, []);
  const stockpiles = useAppSelector(selectStockpileTypes);
  const evacuationCenters = useAppSelector(selectEvacuationCenters);

  const steps = [
    '防災備蓄品を準備する',
    '支援する避難所を決める',
    '備蓄品の配送ラベルを印刷',
  ];

  const [step, setStep] = useState(0);
  const [stockpileId, setStockpileId] = useState('');
  const [stockpileItem, setStockpileItem] = useState(<></>);
  const [evacuationCenterId, setEvacuationCenterId] = useState('');
  const [evacuationCenterItem, setEvacuationCenterItem] = useState(<></>);

  const handleChange1 = (event: SelectChangeEvent) => {
    const item = stockpiles.filter(
      (stockpile) => stockpile.id.toString() === (event.target.value as string)
    );
    const stockpile = item[0];
    const result = (
      <ListItem key={stockpile.id.toString()} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={stockpile.item_en} src={stockpile.image} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {stockpile.item_ja}
              </Typography>
              {'（分類:'}
              {stockpile.category_ja}
              {'）'}
            </>
          }
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {stockpile.description_ja}
              </Typography>
            </>
          }
        />
      </ListItem>
    );
    setStockpileItem(result);
    setStockpileId(event.target.value as string);
    setStep(1);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    const item = evacuationCenters.filter(
      (evacuationCenter) =>
        evacuationCenter.避難所_名称 === (event.target.value as string)
    );
    const evacuationCenter = item[0];
    const result = (
      <ListItem key={evacuationCenter.避難所_名称} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={evacuationCenter.避難所_名称} src={escape} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {evacuationCenter.住所}
              </Typography>
            </>
          }
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {evacuationCenter.避難所_名称}
              </Typography>
            </>
          }
        />
      </ListItem>
    );
    setEvacuationCenterItem(result);
    setEvacuationCenterId(event.target.value as string);
    setStep(2);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: '', flexDirection: 'column' }}>
          <Typography component="h1" variant="h4" align="center">
            防災備蓄に貢献する
          </Typography>
          <Stepper activeStep={step} alternativeLabel sx={{ pt: 3, pb: 5 }}>
            {steps.map((label, index) => (
              <Step key={index.toString()}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, display: '', flexDirection: 'column' }}>
          <Title>防災備蓄品を準備する</Title>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">防災備蓄品</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={stockpileId}
              label="防災備蓄品"
              onChange={handleChange1}
            >
              {stockpiles.map((stockpile, index) => (
                <MenuItem
                  key={index.toString()}
                  value={stockpile.id.toString()}
                >
                  {stockpile.item_ja}
                  {'（分類:'}
                  {stockpile.category_ja}
                  {'）'}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, display: '', flexDirection: 'column' }}>
          <Title>支援する避難所を決める</Title>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">避難所</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={evacuationCenterId}
              label="避難所"
              onChange={handleChange2}
            >
              {evacuationCenters.map((evacuationCenter, index) => (
                <MenuItem
                  key={index.toString()}
                  value={evacuationCenter.避難所_名称}
                >
                  {evacuationCenter.避難所_名称}
                  {'（住所:'}
                  {evacuationCenter.住所}
                  {'）'}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, display: '', flexDirection: 'column' }}>
          <Title>備蓄品の配送ラベルを印刷</Title>
          <Button
            variant="outlined"
            fullWidth
            sx={{ height: 56 }}
            startIcon={<PrintIcon />}
            onClick={() => {
              setStep(3);
              handleClickOpen();
            }}
          >
            ラベル印刷
          </Button>
          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {
                  '１箱に１種類だけ防災備蓄品を入れて品目ラベルを貼ると、避難所でダンボールを開けて中身を仕分ける手間が減ります'
                }
              </DialogTitle>
              <DialogContent>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  {stockpileItem}
                  <Divider variant="inset" component="li" />
                  {evacuationCenterItem}
                </List>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>閉じる</Button>
                <Button onClick={handlePrint} autoFocus>
                  印刷
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default ContributeStockpile;
