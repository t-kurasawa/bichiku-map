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

import Title from './Title';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchStockpile, selectStockpiles } from 'stores/stockpile-slice';
import {
  fetchEvacuationCenter,
  selectEvacuationCenters,
} from 'stores/evacuation-slice';

const ContributeStockpile = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchStockpile());
    dispatch(fetchEvacuationCenter());
  }, []);
  const stockpiles = useAppSelector(selectStockpiles);
  const evacuationCenters = useAppSelector(selectEvacuationCenters);

  const steps = [
    '防災備蓄品を準備する',
    '支援する避難所を決める',
    '１箱１品目の防災備蓄ラベルを印刷',
  ];

  const [step, setStep] = useState(0);
  const [stockpileIem, setStockpileIem] = useState('');
  const [evacuationCenter, setEvacuationCenter] = useState('');

  const handleChange1 = (event: SelectChangeEvent) => {
    setStockpileIem(event.target.value as string);
    setStep(1);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setEvacuationCenter(event.target.value as string);
    setStep(2);
  };

  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: '', flexDirection: 'column' }}>
          <Typography component="h1" variant="h4" align="center">
            防災備蓄に貢献する
          </Typography>

          <Stepper activeStep={step} alternativeLabel sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
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
              value={stockpileIem}
              label="防災備蓄品"
              onChange={handleChange1}
            >
              {stockpiles.map((stockpile) => (
                <MenuItem
                  key={stockpile.id.toString()}
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
              value={evacuationCenter}
              label="避難所"
              onChange={handleChange2}
            >
              {evacuationCenters.map((evacuationCenter, index) => (
                <MenuItem key={index.toString()} value={index.toString()}>
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
          <Title>１箱１品目の防災備蓄ラベルを印刷</Title>
          <Button
            variant="outlined"
            fullWidth
            sx={{ height: 56 }}
            startIcon={<PrintIcon />}
            onClick={() => {
              setStep(3);
            }}
          >
            ラベルを印刷
          </Button>
        </Paper>
      </Grid>
    </>
  );
};

export default ContributeStockpile;
