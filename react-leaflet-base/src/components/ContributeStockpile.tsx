import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import SaveIcon from '@mui/icons-material/Save';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const ContributeStockpile = () => {
  const steps = [
    '防災備蓄品を購入する',
    '分け合える防災備蓄品を登録する',
    '災害時には分け合う',
  ];

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: '', flexDirection: 'column'}} >
        <Typography component="h1" variant="h4" align="center">
            防災備蓄品の登録
        </Typography>

        <Stepper activeStep={1} alternativeLabel sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Grid item xs={8}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="備蓄品目"
            type="stockpile"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="備蓄数"
            type="stockpile-quantity"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="賞味期限"
            type="stockpile-quantity"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="備蓄場所"
            type="address"
            fullWidth
            variant="standard"
          />
          <Button variant="contained" startIcon={<SaveIcon />} sx={{ mt: 3, ml: 1 }}>
            登録
          </Button>
        </Grid>
        <Grid item xs={2} />
      </Paper>
    </Grid>
  );
};

export default ContributeStockpile;
